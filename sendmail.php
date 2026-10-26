<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit;
}

// TURNSTILE_SECRET az admin/config.php-ban van (nincs a publikus repóban).
require_once __DIR__ . '/admin/config.php';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Botcsapdák: néma "siker", hogy a bot ne tudja, hogy kiszűrtük.
$honeypot = trim($_POST['website'] ?? '');
$elapsedMs = (int)($_POST['elapsed'] ?? 0);
if ($honeypot !== '' || $elapsedMs < 3000) {
    echo json_encode(['success' => true]);
    exit;
}

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Minden mező kitöltése kötelező.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Érvénytelen email cím.'
    ]);
    exit;
}

function turnstile_verify(string $token): bool
{
    if ($token === '') {
        return false;
    }
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => TURNSTILE_SECRET,
            'response' => $token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
    ]);
    $raw = curl_exec($ch);
    $result = json_decode((string)$raw, true);
    return !empty($result['success']);
}

if (!turnstile_verify($_POST['cf-turnstile-response'] ?? '')) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'code' => 'captcha'
    ]);
    exit;
}

$to = 'info@grenmastudio.hu';
$subject = 'Új üzenet a Grenma Studio weboldalról';

$body = "
Név: {$name}

Email: {$email}

Üzenet:

{$message}
";

$headers = "From: noreply@grenmastudio.hu\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => $sent
]);
