<?php

require_once __DIR__ . '/auth.php';
require_login();
require_once __DIR__ . '/content-store.php';

$content = load_content();

$pageLabels = [
    'index' => 'Főoldal',
    'about' => 'Rólunk',
    'studio' => 'Stúdió',
    'pricing' => 'Árak',
    'references' => 'Referenciák',
    'contact' => 'Kapcsolat',
    'privacy' => 'Adatvédelem',
];

$langLabels = [
    'hu' => 'Magyar',
    'en' => 'Angol',
];

function humanize(string $key): string
{
    // camelCase -> "Camel Case", pár gyakori rövidítés szebbre cserélve.
    $spaced = preg_replace('/(?<!^)([A-Z])/', ' $1', $key);
    $spaced = ucfirst($spaced);
    $replacements = [
        'Seo Title' => 'SEO cím',
        'Seo Description' => 'SEO leírás',
        'Cta Label' => 'Gomb felirata',
    ];

    return $replacements[$spaced] ?? $spaced;
}

/**
 * Rekurzívan kirajzol egy mezőt: sima szöveg -> input/textarea, lista (pl.
 * felszerelés-tételek) -> textarea (soronként egy elem), beágyazott objektum
 * (pl. equipmentA) -> alcsoport a benne lévő mezőkkel.
 */
function render_field(array $path, $value): void
{
    $name = 'data' . implode('', array_map(fn($p) => '[' . htmlspecialchars($p) . ']', $path));
    $label = humanize((string) end($path));
    $fieldId = 'f_' . implode('_', $path);

    if (is_array($value)) {
        if (array_is_list($value)) {
            $text = implode("\n", $value);
            echo '<div class="field">';
            echo '<label for="' . $fieldId . '">' . htmlspecialchars($label) . ' <span class="hint">(soronként egy elem)</span></label>';
            echo '<textarea id="' . $fieldId . '" name="' . $name . '" rows="6">' . htmlspecialchars($text) . '</textarea>';
            echo '</div>';
        } else {
            echo '<fieldset class="group"><legend>' . htmlspecialchars($label) . '</legend>';
            foreach ($value as $key => $sub) {
                render_field([...$path, $key], $sub);
            }
            echo '</fieldset>';
        }
        return;
    }

    $isLong = mb_strlen((string) $value) > 70 || str_contains((string) $value, "\n");

    echo '<div class="field">';
    echo '<label for="' . $fieldId . '">' . htmlspecialchars($label) . '</label>';
    if ($isLong) {
        echo '<textarea id="' . $fieldId . '" name="' . $name . '" rows="4">' . htmlspecialchars((string) $value) . '</textarea>';
    } else {
        echo '<input type="text" id="' . $fieldId . '" name="' . $name . '" value="' . htmlspecialchars((string) $value) . '">';
    }
    echo '</div>';
}

$saved = isset($_GET['saved']);
$published = $_GET['published'] ?? null;
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Grenma Studio — Tartalomkezelő</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            background: #171717;
            color: #f5f5f5;
            margin: 0;
            padding-bottom: 6rem;
        }
        header {
            position: sticky;
            top: 0;
            z-index: 10;
            background: #1f1f1f;
            border-bottom: 1px solid #333;
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        header h1 { font-size: 1.1rem; margin: 0; }
        header a { color: #a3a3a3; text-decoration: none; font-size: 0.9rem; }
        header a:hover { color: #fff; }
        main { max-width: 900px; margin: 2rem auto; padding: 0 1.5rem; }
        .banner {
            padding: 0.8rem 1.1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
        }
        .banner.ok { background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.4); color: #86efac; }
        .banner.warn { background: rgba(234,179,8,0.12); border: 1px solid rgba(234,179,8,0.4); color: #fde68a; }
        h2.lang-heading {
            font-size: 1.3rem;
            margin: 2.5rem 0 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #dd504d;
        }
        details {
            background: #212121;
            border: 1px solid #333;
            border-radius: 10px;
            margin-bottom: 1rem;
            overflow: hidden;
        }
        summary {
            padding: 0.9rem 1.2rem;
            cursor: pointer;
            font-weight: 600;
            list-style: none;
        }
        summary::-webkit-details-marker { display: none; }
        summary::before { content: "▸ "; color: #dd504d; }
        details[open] summary::before { content: "▾ "; }
        .page-fields { padding: 0.5rem 1.2rem 1.2rem; }
        .field { margin-bottom: 1rem; }
        label { display: block; font-size: 0.85rem; color: #d4d4d4; margin-bottom: 0.35rem; }
        .hint { color: #737373; font-weight: normal; }
        input[type=text], textarea {
            width: 100%;
            padding: 0.6rem 0.7rem;
            border-radius: 6px;
            border: 1px solid #404040;
            background: #171717;
            color: #f5f5f5;
            font-size: 0.95rem;
            font-family: inherit;
            resize: vertical;
        }
        input[type=text]:focus, textarea:focus { outline: none; border-color: #dd504d; }
        fieldset.group {
            border: 1px solid #3a3a3a;
            border-radius: 8px;
            margin: 1rem 0;
            padding: 0.8rem 1rem 0.2rem;
        }
        fieldset.group legend { padding: 0 0.4rem; color: #f5f5f5; font-weight: 600; font-size: 0.9rem; }
        .actions {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1f1f1f;
            border-top: 1px solid #333;
            padding: 1rem 1.5rem;
            display: flex;
            gap: 0.8rem;
            justify-content: center;
        }
        button {
            padding: 0.8rem 1.6rem;
            border-radius: 8px;
            border: none;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
        }
        button.save { background: #404040; color: #f5f5f5; }
        button.save:hover { background: #525252; }
        button.publish { background: #dd504d; color: #fff; }
        button.publish:hover { background: #c43e3b; }
    </style>
</head>
<body>
    <header>
        <h1>Grenma Studio — Tartalomkezelő</h1>
        <a href="logout.php">Kilépés</a>
    </header>

    <main>
        <?php if ($saved): ?>
            <?php if ($published === '1'): ?>
                <div class="banner ok">Elmentve és közzétéve — a build ~1-2 percen belül elkészül és élesre kerül.</div>
            <?php elseif ($published === '0'): ?>
                <div class="banner warn">Elmentve, de a közzététel-indítás nem sikerült (a GitHub nem fogadta a kérést). A szöveg biztonságban van, de build nem indult — szólj a fejlesztőnek.</div>
            <?php else: ?>
                <div class="banner ok">Elmentve (még nem publikálva).</div>
            <?php endif; ?>
        <?php endif; ?>

        <form method="POST" action="save.php">
            <?php foreach ($content as $lang => $pages): ?>
                <h2 class="lang-heading"><?= htmlspecialchars($langLabels[$lang] ?? strtoupper($lang)) ?></h2>
                <?php foreach ($pages as $page => $fields): ?>
                    <details>
                        <summary><?= htmlspecialchars($pageLabels[$page] ?? $page) ?></summary>
                        <div class="page-fields">
                            <?php foreach ($fields as $key => $value): ?>
                                <?php render_field([$lang, $page, $key], $value); ?>
                            <?php endforeach; ?>
                        </div>
                    </details>
                <?php endforeach; ?>
            <?php endforeach; ?>

            <div class="actions">
                <button type="submit" name="publish" value="0" class="save" formaction="save.php">Mentés (közzététel nélkül)</button>
                <button type="submit" name="publish" value="1" class="publish">Mentés és közzététel</button>
            </div>
        </form>
    </main>
</body>
</html>
