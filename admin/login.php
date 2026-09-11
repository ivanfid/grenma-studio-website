<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/config.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';

    if (password_verify($password, ADMIN_PASSWORD_HASH)) {
        // Session fixation elleni védelem: új session ID bejelentkezéskor.
        session_regenerate_id(true);
        $_SESSION['admin_logged_in'] = true;

        header('Location: index.php');
        exit;
    }

    $error = 'Hibás jelszó.';
}

// Ha már be van jelentkezve, egyből az admin felületre irányítjuk.
if (!empty($_SESSION['admin_logged_in'])) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Belépés | Grenma Studio admin</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            background: #171717;
            color: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
        }
        form {
            background: #262626;
            padding: 2.5rem;
            border-radius: 14px;
            width: 100%;
            max-width: 360px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }
        h1 { font-size: 1.25rem; margin: 0 0 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: #d4d4d4; }
        input {
            width: 100%;
            padding: 0.75rem;
            border-radius: 8px;
            border: 1px solid #404040;
            background: #171717;
            color: #f5f5f5;
            font-size: 1rem;
            margin-bottom: 1.25rem;
        }
        input:focus { outline: none; border-color: #dd504d; }
        button {
            width: 100%;
            padding: 0.75rem;
            border-radius: 8px;
            border: none;
            background: #dd504d;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
        }
        button:hover { background: #c43e3b; }
        .error {
            background: rgba(220, 38, 38, 0.15);
            border: 1px solid rgba(220, 38, 38, 0.4);
            color: #fca5a5;
            padding: 0.6rem 0.9rem;
            border-radius: 8px;
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h1>Grenma Studio — Tartalomkezelő</h1>
        <?php if ($error): ?>
            <div class="error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>
        <label for="password">Jelszó</label>
        <input type="password" id="password" name="password" autofocus required>
        <button type="submit">Belépés</button>
    </form>
</body>
</html>
