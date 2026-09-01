<?php
/**
 * API de Gestión del Blog Lumen
 * Guarda artículos y fotografías en el propio servidor de Hostalia.
 */

// Habilitar CORS para permitir desarrollo local desde puertos diferentes
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Manejo del preflight (peticiones OPTIONS de los navegadores)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ----------------------------------------------------
// CONFIGURACIÓN DE BASE DE DATOS Y ADMINISTRACIÓN
// ----------------------------------------------------
// ¡IMPORTANTE! Reemplaza estos valores con los de tu base de datos de Hostalia.
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', '11491669_lumen_blog');
define('DB_USER', 'lumen_blog');
define('DB_PASS', 'lumen2026');

// Contraseña para acceder a la administración. ¡Cámbiala por una segura!
define('ADMIN_PASSWORD', 'lumen2026');

// Duración de la sesión del administrador en segundos (24 horas)
define('TOKEN_EXPIRY_SECONDS', 86400);

// Rutas de almacenamiento de imágenes
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL_PATH', 'uploads/');

// Helper para obtener las cabeceras HTTP de forma compatible con cualquier servidor
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

// Helper para responder con JSON y código de estado
function json_respond($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

// ----------------------------------------------------
// CONEXIÓN Y CREACIÓN DE TABLAS AUTOMÁTICA
// ----------------------------------------------------
$db = null;
$db_error = null;

try {
    // Conectar directamente a la base de datos con host y puerto separados
    $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $db = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    // Crear tabla de artículos si no existe
    $db->exec("CREATE TABLE IF NOT EXISTS `lumen_articulos` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `titulo` VARCHAR(255) NOT NULL,
        `snippet` TEXT NOT NULL,
        `categoria` VARCHAR(50) NOT NULL,
        `fecha` VARCHAR(50) NOT NULL,
        `tiempo_lectura` VARCHAR(20) DEFAULT NULL,
        `url_imagen` VARCHAR(255) NOT NULL,
        `enlace` VARCHAR(255) NOT NULL,
        `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    
    // Crear tabla de sesiones si no existe
    $db->exec("CREATE TABLE IF NOT EXISTS `lumen_sesiones` (
        `token` VARCHAR(64) PRIMARY KEY,
        `expira_en` DATETIME NOT NULL,
        `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    
} catch (PDOException $e) {
    $db_error = $e->getMessage();
}

// ----------------------------------------------------
// RUTINAS DE AUTENTICACIÓN
// ----------------------------------------------------
function get_auth_token() {
    $headers = apache_request_headers();
    if (isset($headers['Authorization'])) {
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            return $matches[1];
        }
    }
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        if (preg_match('/Bearer\s(\S+)/', $_SERVER['HTTP_AUTHORIZATION'], $matches)) {
            return $matches[1];
        }
    }
    return null;
}

function check_auth($db) {
    if (!$db) return false;
    $token = get_auth_token();
    if (!$token) return false;
    
    try {
        $stmt = $db->prepare("SELECT * FROM `lumen_sesiones` WHERE `token` = ? AND `expira_en` > NOW()");
        $stmt->execute([$token]);
        $session = $stmt->fetch();
        return $session ? true : false;
    } catch (PDOException $e) {
        return false;
    }
}

// ----------------------------------------------------
// MANEJO DE ENDPOINTS
// ----------------------------------------------------
$action = isset($_GET['action']) ? $_GET['action'] : '';

// ENDPOINT DE DIAGNÓSTICO TEMPORAL - ELIMINAR DESPUÉS DE RESOLVER EL PROBLEMA
if ($action === 'diag') {
    $info = [
        'php_version'  => phpversion(),
        'pdo_drivers'  => PDO::getAvailableDrivers(),
        'db_host'      => DB_HOST,
        'db_port'      => DB_PORT,
        'db_name'      => DB_NAME,
        'db_user'      => DB_USER,
        'db_connected' => ($db !== null),
        'db_error'     => $db_error,
        'dsn_used'     => "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4",
    ];
    if ($db) {
        try {
            $stmt = $db->query("SELECT COUNT(*) as total FROM `lumen_articulos`");
            $info['articulos_en_bd'] = $stmt->fetch()['total'];
        } catch (Exception $e) {
            $info['tabla_error'] = $e->getMessage();
        }
    }
    json_respond($info);
}


// Si la acción requiere base de datos y esta no ha conectado, devolvemos error
if (!$db && in_array($action, ['login', 'verify_token', 'create', 'delete'])) {
    json_respond([
        'error' => true,
        'message' => 'Error de conexión a la base de datos en Hostalia. Debes configurar las credenciales correctas en el archivo api.php.',
        'details' => $db_error
    ], 500);
}

switch ($action) {
    
    // 1. LISTAR ARTÍCULOS
    case 'list':
        // Si no hay base de datos configurada, devolvemos artículos mock de ejemplo (fallback temporal)
        if (!$db) {
            json_respond([
                [
                    "id" => 101,
                    "titulo" => "El ritual de la mañana: Cómo empezar el día con energía y foco (Ejemplo Local)",
                    "snippet" => "Descubre cómo pequeños ajustes en tu rutina matutina pueden transformar tu día. Desde la hidratación hasta los primeros movimientos. (Configura la base de datos MySQL en api.php para empezar a añadir artículos reales).",
                    "categoria" => "Bienestar",
                    "fecha" => date('d M Y'),
                    "tiempo_lectura" => "4 min",
                    "url_imagen" => "src/assets/images/blog_morning_routine_1787821714000.jpg",
                    "enlace" => "#",
                    "is_fallback" => true
                ],
                [
                    "id" => 102,
                    "titulo" => "Movilidad articular: El secreto de la longevidad física (Ejemplo Local)",
                    "snippet" => "No se trata solo de ser flexible. Entiende la diferencia entre flexibilidad pasiva y movilidad activa para proteger tus articulaciones. (Configura la base de datos MySQL en api.php para empezar a añadir artículos reales).",
                    "categoria" => "Movilidad",
                    "fecha" => date('d M Y'),
                    "tiempo_lectura" => "6 min",
                    "url_imagen" => "src/assets/images/blog_stretching_1787821731335.jpg",
                    "enlace" => "#",
                    "is_fallback" => true
                ],
                [
                    "id" => 103,
                    "titulo" => "Nutrición antiinflamatoria para potenciar tu recuperación (Ejemplo Local)",
                    "snippet" => "Qué comer después de tu sesión de Reformer para maximizar la adaptación muscular y reducir la inflamación. (Configura la base de datos MySQL en api.php para empezar a añadir artículos reales).",
                    "categoria" => "Nutrición",
                    "fecha" => date('d M Y'),
                    "tiempo_lectura" => "5 min",
                    "url_imagen" => "src/assets/images/blog_nutrition_1787821746227.jpg",
                    "enlace" => "#",
                    "is_fallback" => true
                ]
            ]);
        }
        
        try {
            $stmt = $db->query("SELECT * FROM `lumen_articulos` ORDER BY `id` DESC");
            $posts = $stmt->fetchAll();
            json_respond($posts);
        } catch (PDOException $e) {
            json_respond(['error' => true, 'message' => 'Error al leer artículos: ' . $e->getMessage()], 500);
        }
        break;

    // 2. INICIAR SESIÓN (OBTENER TOKEN)
    case 'login':
        $input = json_decode(file_get_contents('php://input'), true);
        $password = isset($input['password']) ? $input['password'] : '';
        
        if ($password === ADMIN_PASSWORD) {
            try {
                // Limpiar sesiones expiradas para no llenar la base de datos
                $db->exec("DELETE FROM `lumen_sesiones` WHERE `expira_en` < NOW()");
                
                // Generar token aleatorio seguro
                $token = bin2hex(random_bytes(32));
                $expiry = date('Y-m-d H:i:s', time() + TOKEN_EXPIRY_SECONDS);
                
                $stmt = $db->prepare("INSERT INTO `lumen_sesiones` (`token`, `expira_en`) VALUES (?, ?)");
                $stmt->execute([$token, $expiry]);
                
                json_respond([
                    'success' => true,
                    'token' => $token,
                    'expires_at' => $expiry
                ]);
            } catch (PDOException $e) {
                json_respond(['error' => true, 'message' => 'Error al generar sesión: ' . $e->getMessage()], 500);
            }
        } else {
            json_respond(['error' => true, 'message' => 'Contraseña incorrecta.'], 401);
        }
        break;

    // 3. VERIFICAR TOKEN DE SESIÓN
    case 'verify_token':
        if (check_auth($db)) {
            json_respond(['success' => true, 'authenticated' => true]);
        } else {
            json_respond(['error' => true, 'authenticated' => false, 'message' => 'Sesión no válida o expirada.'], 401);
        }
        break;

    // 4. CREAR NUEVO ARTÍCULO
    case 'create':
        if (!check_auth($db)) {
            json_respond(['error' => true, 'message' => 'Acceso denegado. No tienes autorización.'], 401);
        }
        
        $titulo = isset($_POST['titulo']) ? trim($_POST['titulo']) : '';
        $snippet = isset($_POST['snippet']) ? trim($_POST['snippet']) : '';
        $categoria = isset($_POST['categoria']) ? trim($_POST['categoria']) : '';
        $enlace = isset($_POST['enlace']) ? trim($_POST['enlace']) : '';
        $tiempo_lectura = isset($_POST['tiempo_lectura']) ? trim($_POST['tiempo_lectura']) : '';
        
        if (empty($titulo) || empty($snippet) || empty($categoria) || empty($enlace)) {
            json_respond(['error' => true, 'message' => 'Por favor, rellena todos los campos obligatorios.'], 400);
        }
        
        // Verificar categoría válida
        $categorias_validas = ['Movilidad', 'Bienestar', 'Nutrición', 'Movimiento'];
        if (!in_array($categoria, $categorias_validas)) {
            json_respond(['error' => true, 'message' => 'La categoría seleccionada no es válida.'], 400);
        }
        
        // Validar subida de imagen
        if (!isset($_FILES['imagen']) || $_FILES['imagen']['error'] !== UPLOAD_ERR_OK) {
            json_respond(['error' => true, 'message' => 'La imagen de portada es obligatoria o ha fallado la subida.'], 400);
        }
        
        $file = $_FILES['imagen'];
        $allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        $file_info = getimagesize($file['tmp_name']);
        
        if ($file_info === false || !in_array($file_info['mime'], $allowed_types)) {
            json_respond(['error' => true, 'message' => 'El archivo debe ser una imagen válida (.jpg, .png o .webp).'], 400);
        }
        
        // Crear carpeta de uploads si no existe
        if (!is_dir(UPLOAD_DIR)) {
            mkdir(UPLOAD_DIR, 0755, true);
        }
        
        // Generar nombre de archivo único
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $new_filename = 'blog_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
        $dest_path = UPLOAD_DIR . $new_filename;
        
        if (!move_uploaded_file($file['tmp_name'], $dest_path)) {
            json_respond(['error' => true, 'message' => 'Error al mover el archivo subido al servidor.'], 500);
        }
        
        // URL pública de la imagen
        $url_imagen = UPLOAD_URL_PATH . $new_filename;
        
        // Generar cadena de fecha en español (ej. "12 Oct 2026")
        $meses = [
            'Jan'=>'Ene', 'Feb'=>'Feb', 'Mar'=>'Mar', 'Apr'=>'Abr', 'May'=>'May', 'Jun'=>'Jun', 
            'Jul'=>'Jul', 'Aug'=>'Ago', 'Sep'=>'Sep', 'Oct'=>'Oct', 'Nov'=>'Nov', 'Dec'=>'Dic'
        ];
        $date_str = date('d ') . $meses[date('M')] . date(' Y');
        
        try {
            $stmt = $db->prepare("INSERT INTO `lumen_articulos` (`titulo`, `snippet`, `categoria`, `fecha`, `tiempo_lectura`, `url_imagen`, `enlace`) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$titulo, $snippet, $categoria, $date_str, $tiempo_lectura, $url_imagen, $enlace]);
            
            json_respond([
                'success' => true,
                'message' => 'Artículo publicado correctamente en Hostalia.',
                'id' => $db->lastInsertId()
            ]);
        } catch (PDOException $e) {
            // Eliminar imagen del disco si falla la inserción en BD
            if (file_exists($dest_path)) {
                unlink($dest_path);
            }
            json_respond(['error' => true, 'message' => 'Error al guardar el artículo en la base de datos: ' . $e->getMessage()], 500);
        }
        break;

    // 5. ELIMINAR ARTÍCULO
    case 'delete':
        if (!check_auth($db)) {
            json_respond(['error' => true, 'message' => 'Acceso denegado. No tienes autorización.'], 401);
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        $id = isset($input['id']) ? intval($input['id']) : 0;
        
        if ($id <= 0) {
            json_respond(['error' => true, 'message' => 'ID de artículo no válido.'], 400);
        }
        
        try {
            // Consultar la imagen para poder borrarla del disco
            $stmt = $db->prepare("SELECT `url_imagen` FROM `lumen_articulos` WHERE `id` = ?");
            $stmt->execute([$id]);
            $post = $stmt->fetch();
            
            if (!$post) {
                json_respond(['error' => true, 'message' => 'El artículo no existe en el sistema.'], 404);
            }
            
            // Borrar de la base de datos
            $stmt = $db->prepare("DELETE FROM `lumen_articulos` WHERE `id` = ?");
            $stmt->execute([$id]);
            
            // Borrar el archivo del disco en el servidor
            $image_path = __DIR__ . '/' . $post['url_imagen'];
            if (file_exists($image_path) && is_file($image_path)) {
                unlink($image_path);
            }
            
            json_respond([
                'success' => true,
                'message' => 'Artículo e imagen eliminados correctamente de Hostalia.'
            ]);
        } catch (PDOException $e) {
            json_respond(['error' => true, 'message' => 'Error al eliminar el artículo de la base de datos: ' . $e->getMessage()], 500);
        }
        break;
        
    default:
        json_respond(['error' => true, 'message' => 'Acción no válida o no especificada.'], 400);
        break;
}
