<?php
/**
 * API de Gestión del Blog Lumen
 * Usa SQLite — no requiere servidor MySQL ni permisos de red.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

define('ADMIN_PASSWORD', 'lumen2026');
define('TOKEN_EXPIRY_SECONDS', 86400);
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL_PATH', 'uploads/');
define('DB_PATH', __DIR__ . '/data/lumen_blog.db');

if (!function_exists('apache_request_headers')) {
    function apache_request_headers() {
        $headers = [];
        foreach ($_SERVER as $key => $value) {
            if (substr($key, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($key, 5)))))] = $value;
            }
        }
        return $headers;
    }
}

function json_respond($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

$db = null;
$db_error = null;

try {
    $data_dir = dirname(DB_PATH);
    if (!is_dir($data_dir)) {
        mkdir($data_dir, 0755, true);
    }
    $db = new PDO('sqlite:' . DB_PATH);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $db->exec('PRAGMA journal_mode=WAL');
    $db->exec("CREATE TABLE IF NOT EXISTS lumen_articulos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        snippet TEXT NOT NULL,
        categoria TEXT NOT NULL,
        fecha TEXT NOT NULL,
        tiempo_lectura TEXT DEFAULT NULL,
        url_imagen TEXT NOT NULL,
        enlace TEXT NOT NULL,
        creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
    $db->exec("CREATE TABLE IF NOT EXISTS lumen_sesiones (
        token TEXT PRIMARY KEY,
        expira_en DATETIME NOT NULL,
        creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
} catch (Exception $e) {
    $db_error = $e->getMessage();
    $db = null;
}

function get_auth_token() {
    $headers = apache_request_headers();
    if (isset($headers['Authorization'])) {
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) return $matches[1];
    }
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        if (preg_match('/Bearer\s(\S+)/', $_SERVER['HTTP_AUTHORIZATION'], $matches)) return $matches[1];
    }
    return null;
}

function check_auth($db) {
    if (!$db) return false;
    $token = get_auth_token();
    if (!$token) return false;
    try {
        $stmt = $db->prepare("SELECT * FROM lumen_sesiones WHERE token = ? AND expira_en > datetime('now')");
        $stmt->execute([$token]);
        return $stmt->fetch() ? true : false;
    } catch (Exception $e) { return false; }
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action === 'diag') {
    $info = [
        'php_version'     => phpversion(),
        'pdo_drivers'     => PDO::getAvailableDrivers(),
        'db_type'         => 'SQLite',
        'db_path'         => DB_PATH,
        'db_path_exists'  => file_exists(DB_PATH),
        'db_dir_writable' => is_writable(dirname(DB_PATH)),
        'db_connected'    => ($db !== null),
        'db_error'        => $db_error,
    ];
    if ($db) {
        try {
            $stmt = $db->query("SELECT COUNT(*) as total FROM lumen_articulos");
            $info['articulos_en_bd'] = $stmt->fetch()['total'];
        } catch (Exception $e) { $info['tabla_error'] = $e->getMessage(); }
    }
    json_respond($info);
}

if (!$db && in_array($action, ['login', 'verify_token', 'create', 'delete'])) {
    json_respond(['error' => true, 'message' => 'Error al abrir SQLite. Comprueba permisos en data/.', 'details' => $db_error], 500);
}

switch ($action) {

    case 'list':
        if (!$db) json_respond(['error' => true, 'message' => 'BD no disponible: ' . $db_error], 500);
        try {
            $stmt = $db->query("SELECT * FROM lumen_articulos ORDER BY id DESC");
            json_respond($stmt->fetchAll());
        } catch (Exception $e) {
            json_respond(['error' => true, 'message' => 'Error al leer artículos: ' . $e->getMessage()], 500);
        }
        break;

    case 'login':
        $input = json_decode(file_get_contents('php://input'), true);
        $password = isset($input['password']) ? $input['password'] : '';
        if ($password === ADMIN_PASSWORD) {
            try {
                $db->exec("DELETE FROM lumen_sesiones WHERE expira_en < datetime('now')");
                $token = bin2hex(random_bytes(32));
                $expiry = date('Y-m-d H:i:s', time() + TOKEN_EXPIRY_SECONDS);
                $stmt = $db->prepare("INSERT INTO lumen_sesiones (token, expira_en) VALUES (?, ?)");
                $stmt->execute([$token, $expiry]);
                json_respond(['success' => true, 'token' => $token, 'expires_at' => $expiry]);
            } catch (Exception $e) {
                json_respond(['error' => true, 'message' => 'Error al generar sesión: ' . $e->getMessage()], 500);
            }
        } else {
            json_respond(['error' => true, 'message' => 'Contraseña incorrecta.'], 401);
        }
        break;

    case 'verify_token':
        if (check_auth($db)) json_respond(['success' => true, 'authenticated' => true]);
        else json_respond(['error' => true, 'authenticated' => false, 'message' => 'Sesión no válida o expirada.'], 401);
        break;

    case 'create':
        if (!check_auth($db)) json_respond(['error' => true, 'message' => 'Acceso denegado.'], 401);
        $titulo = isset($_POST['titulo']) ? trim($_POST['titulo']) : '';
        $snippet = isset($_POST['snippet']) ? trim($_POST['snippet']) : '';
        $categoria = isset($_POST['categoria']) ? trim($_POST['categoria']) : '';
        $enlace = isset($_POST['enlace']) ? trim($_POST['enlace']) : '';
        $tiempo_lectura = isset($_POST['tiempo_lectura']) ? trim($_POST['tiempo_lectura']) : '';
        if (empty($titulo) || empty($snippet) || empty($categoria) || empty($enlace))
            json_respond(['error' => true, 'message' => 'Rellena todos los campos obligatorios.'], 400);
        $categorias_validas = ['Movilidad', 'Bienestar', 'Nutrición', 'Movimiento'];
        if (!in_array($categoria, $categorias_validas))
            json_respond(['error' => true, 'message' => 'Categoría no válida.'], 400);
        if (!isset($_FILES['imagen']) || $_FILES['imagen']['error'] !== UPLOAD_ERR_OK)
            json_respond(['error' => true, 'message' => 'La imagen es obligatoria o falló la subida.'], 400);
        $file = $_FILES['imagen'];
        $file_info = getimagesize($file['tmp_name']);
        $allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if ($file_info === false || !in_array($file_info['mime'], $allowed_types))
            json_respond(['error' => true, 'message' => 'Imagen no válida (.jpg, .png o .webp).'], 400);
        if (!is_dir(UPLOAD_DIR)) mkdir(UPLOAD_DIR, 0755, true);
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $new_filename = 'blog_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
        $dest_path = UPLOAD_DIR . $new_filename;
        if (!move_uploaded_file($file['tmp_name'], $dest_path))
            json_respond(['error' => true, 'message' => 'Error al mover el archivo.'], 500);
        $url_imagen = UPLOAD_URL_PATH . $new_filename;
        $meses = ['Jan'=>'Ene','Feb'=>'Feb','Mar'=>'Mar','Apr'=>'Abr','May'=>'May','Jun'=>'Jun',
                  'Jul'=>'Jul','Aug'=>'Ago','Sep'=>'Sep','Oct'=>'Oct','Nov'=>'Nov','Dec'=>'Dic'];
        $date_str = date('d ') . $meses[date('M')] . date(' Y');
        try {
            $stmt = $db->prepare("INSERT INTO lumen_articulos (titulo, snippet, categoria, fecha, tiempo_lectura, url_imagen, enlace) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$titulo, $snippet, $categoria, $date_str, $tiempo_lectura, $url_imagen, $enlace]);
            json_respond(['success' => true, 'message' => 'Artículo publicado.', 'id' => $db->lastInsertId()]);
        } catch (Exception $e) {
            if (file_exists($dest_path)) unlink($dest_path);
            json_respond(['error' => true, 'message' => 'Error al guardar: ' . $e->getMessage()], 500);
        }
        break;

    case 'delete':
        if (!check_auth($db)) json_respond(['error' => true, 'message' => 'Acceso denegado.'], 401);
        $input = json_decode(file_get_contents('php://input'), true);
        $id = isset($input['id']) ? intval($input['id']) : 0;
        if ($id <= 0) json_respond(['error' => true, 'message' => 'ID no válido.'], 400);
        try {
            $stmt = $db->prepare("SELECT url_imagen FROM lumen_articulos WHERE id = ?");
            $stmt->execute([$id]);
            $post = $stmt->fetch();
            if (!$post) json_respond(['error' => true, 'message' => 'Artículo no encontrado.'], 404);
            $stmt = $db->prepare("DELETE FROM lumen_articulos WHERE id = ?");
            $stmt->execute([$id]);
            $image_path = __DIR__ . '/' . $post['url_imagen'];
            if (file_exists($image_path) && is_file($image_path)) unlink($image_path);
            json_respond(['success' => true, 'message' => 'Artículo eliminado.']);
        } catch (Exception $e) {
            json_respond(['error' => true, 'message' => 'Error al eliminar: ' . $e->getMessage()], 500);
        }
        break;

    default:
        json_respond(['error' => true, 'message' => 'Acción no válida o no especificada.'], 400);
        break;
}
