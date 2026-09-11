<?php

require_once __DIR__ . '/auth.php';
require_login();
require_once __DIR__ . '/content-store.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

/**
 * A HTML form minden mezőt szövegként küld — ez a függvény az EREDETI adat
 * "alakja" (string / lista / beágyazott objektum) alapján állítja vissza a
 * helyes típust: a listáknál (pl. felszerelés-tételek) soronként szétválasztja
 * a textarea tartalmát, a beágyazott objektumoknál (equipmentA/B/F) rekurzívan
 * megy tovább, egyébként egyszerű szövegként kezeli.
 */
function reconcile($original, $posted)
{
    if (is_array($original) && array_is_list($original)) {
        $text = is_string($posted) ? $posted : '';
        $lines = preg_split('/\r\n|\r|\n/', $text);
        $lines = array_map('trim', $lines);
        $lines = array_values(array_filter($lines, fn($l) => $l !== ''));

        return $lines;
    }

    if (is_array($original)) {
        $result = [];
        foreach ($original as $key => $value) {
            $result[$key] = reconcile($value, is_array($posted) ? ($posted[$key] ?? null) : null);
        }

        return $result;
    }

    return is_string($posted) ? $posted : (string) $original;
}

function trigger_github_build(array $content): bool
{
    $url = 'https://api.github.com/repos/' . GITHUB_OWNER . '/' . GITHUB_REPO . '/dispatches';
    // A teljes tartalmat belecsomagoljuk a dispatch payload-ba (jelenleg
    // ~23 KB, a GitHub 64 KB-os limitjén jócskán belül) — így a build-workflow
    // közvetlenül ebből tudja felülírni az app/content/site-content.json-t,
    // nincs szükség egy külön, publikus letöltő végpontra a content-data.json-hoz.
    $payload = json_encode([
        'event_type' => 'content-publish',
        'client_payload' => ['content' => $content],
    ]);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Accept: application/vnd.github+json',
            'Authorization: Bearer ' . GITHUB_TOKEN,
            'User-Agent: grenma-admin',
            'X-GitHub-Api-Version: 2022-11-28',
        ],
    ]);

    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($code !== 204) {
        error_log('GitHub dispatch failed (HTTP ' . $code . '): ' . $curlError);
    }

    return $code === 204;
}

$original = load_content();
$posted = $_POST['data'] ?? [];
$updated = reconcile($original, $posted);

save_content($updated);

$publish = ($_POST['publish'] ?? '0') === '1';
$publishOk = null;

if ($publish) {
    $publishOk = trigger_github_build($updated);
}

$query = 'saved=1';
if ($publish) {
    $query .= '&published=' . ($publishOk ? '1' : '0');
}

header('Location: index.php?' . $query);
exit;
