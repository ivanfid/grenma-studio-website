<?php
/**
 * Közös bejelentkezés-ellenőrzés — minden védett oldal ezt húzza be legelső
 * sorként. Ha nincs bejelentkezve a látogató, átirányítja login.php-re.
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/config.php';

function require_login(): void
{
    if (empty($_SESSION['admin_logged_in'])) {
        header('Location: login.php');
        exit;
    }
}
