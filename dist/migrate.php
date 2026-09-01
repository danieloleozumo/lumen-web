<?php
/**
 * Script de migración único — importa los 4 artículos de MySQL a SQLite.
 * ELIMINAR después de ejecutar.
 */

define('DB_PATH', __DIR__ . '/data/lumen_blog.db');

header('Content-Type: text/plain; charset=utf-8');

try {
    $db = new PDO('sqlite:' . DB_PATH);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Artículos extraídos de MySQL
    $articulos = [
        [
            'titulo'        => 'La verdadera ciencia de los superalimentos',
            'snippet'       => 'Más allá del marketing, los superalimentos destacan por su densidad nutricional real. Descubre qué dice la ciencia sobre el açaí, la cúrcuma, la espirulina y otros alimentos con propiedades extraordinarias demostradas.',
            'categoria'     => 'Nutrición',
            'fecha'         => '31 Ago 2026',
            'tiempo_lectura'=> '6 min',
            'url_imagen'    => 'uploads/blog_1788169413_46d89048.jpg',
            'enlace'        => 'https://lumenmovimiento.es/uploads/La%20verdadera%20ciencia%20de%20los%20superalimentos.pdf',
        ],
        [
            'titulo'        => 'El arte y la ciencia del Pilates Reformer',
            'snippet'       => 'Más que una máquina de entrenamiento, el Pilates Reformer es un sistema de movimiento que trabaja la fuerza, la flexibilidad y el control motor de forma simultánea. Conoce su historia, beneficios y metodología.',
            'categoria'     => 'Movilidad',
            'fecha'         => '31 Ago 2026',
            'tiempo_lectura'=> '7 min',
            'url_imagen'    => 'uploads/blog_1788171314_428d2304.jpg',
            'enlace'        => 'https://lumenmovimiento.es/uploads/El%20arte%20y%20la%20ciencia%20del%20pilates%20reformer.pdf',
        ],
        [
            'titulo'        => 'Salud del Suelo Pélvico: Anatomía, Emociones y Tratamientos Avanzados',
            'snippet'       => 'Una guía integral para comprender cómo funcionan los músculos del suelo pélvico, su relación con las emociones y el sistema nervioso, y los tratamientos más avanzados disponibles en fisioterapia especializada.',
            'categoria'     => 'Bienestar',
            'fecha'         => '31 Ago 2026',
            'tiempo_lectura'=> '8 min',
            'url_imagen'    => 'uploads/blog_1788174952_f849e7fa.jpg',
            'enlace'        => 'https://lumenmovimiento.es/uploads/Salud%20del%20Suelo%20P%C3%A9lvico%20Anatom%C3%ADa%2C%20Emociones%20y%20Tratamientos%20Avanzados.pdf',
        ],
        [
            'titulo'        => 'Guía de salud y ejercicio en el primer año posparto',
            'snippet'       => 'Una guía para recuperar el movimiento de forma segura y progresiva tras el parto. Ejercicio adaptado, recuperación del suelo pélvico, lactancia y bienestar emocional: todo lo que necesitas saber en tu primer año.',
            'categoria'     => 'Bienestar',
            'fecha'         => '31 Ago 2026',
            'tiempo_lectura'=> '8 min',
            'url_imagen'    => 'uploads/blog_1788175831_c44a9597.jpg',
            'enlace'        => 'https://lumenmovimiento.es/uploads/Gu%C3%ADa%20de%20salud%20y%20ejercicio%20en%20el%20primer%20a%C3%B1o%20posparto.pdf',
        ],
    ];

    $stmt = $db->prepare("SELECT COUNT(*) as total FROM lumen_articulos");
    $stmt->execute();
    $total = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

    if ($total > 0) {
        echo "Ya hay $total artículos en SQLite. No se ha importado nada para evitar duplicados.\n";
        echo "Elimina este archivo del servidor.\n";
        exit();
    }

    $insert = $db->prepare(
        "INSERT INTO lumen_articulos (titulo, snippet, categoria, fecha, tiempo_lectura, url_imagen, enlace)
         VALUES (:titulo, :snippet, :categoria, :fecha, :tiempo_lectura, :url_imagen, :enlace)"
    );

    foreach ($articulos as $art) {
        $insert->execute($art);
        echo "✓ Importado: " . $art['titulo'] . "\n";
    }

    echo "\n¡Migración completada! " . count($articulos) . " artículos importados a SQLite.\n";
    echo "ELIMINA ESTE ARCHIVO ahora desde el Administrador de Archivos de Hostalia.\n";

} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
