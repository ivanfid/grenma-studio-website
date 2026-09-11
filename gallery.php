<?php

header('Content-Type: application/json; charset=utf-8');

$dir = __DIR__ . '/gallery';
$files = [];

if (is_dir($dir)) {
    foreach (scandir($dir) as $f) {
        if (preg_match('/^[\w\-]+\.(jpe?g|png|webp)$/i', $f)) {
            $files[] = $f;
        }
    }
}

sort($files, SORT_NATURAL | SORT_FLAG_CASE);

echo json_encode(array_values($files));
