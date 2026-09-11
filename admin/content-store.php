<?php
/**
 * A szerkeszthető tartalom (content-data.json) olvasása/írása. Ez a fájl az
 * "élő" adat — az admin ezt szerkeszti. A publikáláskor a build ezt húzza le
 * és sütteti bele a statikus oldalba (app/content/site-content.json helyére).
 */

define('CONTENT_DATA_FILE', __DIR__ . '/content-data.json');

function load_content(): array
{
    if (!file_exists(CONTENT_DATA_FILE)) {
        return [];
    }

    $json = file_get_contents(CONTENT_DATA_FILE);
    $data = json_decode($json, true);

    return is_array($data) ? $data : [];
}

function save_content(array $data): void
{
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    file_put_contents(CONTENT_DATA_FILE, $json);
}
