<?php
/**
 * Ez egy PÉLDA konfiguráció — másold le `config.php` néven ugyanebbe a
 * mappába, és töltsd ki a saját adataiddal. A `config.php`-t SOHA ne
 * commitold git-be (a .gitignore már kizárja).
 */

// A jelszó HASH-elt formában — ne az élő jelszót írd ide!
// Generáláshoz futtasd php-vel (a szerveren, vagy bármilyen PHP-s helyen):
//   php -r "echo password_hash('ide-a-jelszavad', PASSWORD_DEFAULT), PHP_EOL;"
// és az eredményt másold ide.
define('ADMIN_PASSWORD_HASH', '$2y$10$REPLACE_WITH_YOUR_OWN_HASH');

// GitHub Personal Access Token, "repo" (vagy finomhangolt "Contents: write" +
// "Actions: write") jogosultsággal, ahhoz a repóhoz, amit közzétételkor
// buildelni/deploy-olni szeretnél.
// Létrehozás: GitHub -> Settings -> Developer settings -> Personal access
// tokens -> Fine-grained tokens.
define('GITHUB_TOKEN', 'ghp_REPLACE_WITH_YOUR_TOKEN');
define('GITHUB_OWNER', 'ivanfid');
define('GITHUB_REPO', 'grenma-studio-website');
