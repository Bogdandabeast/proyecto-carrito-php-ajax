<?php

include "../Model/bbdd.php";

// Obtener datos del cuerpo de la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);

// Establecer la cabecera para JSON
header('Content-Type: application/json');

try {
    $zapatillas = $conexion->prepare("SELECT * FROM zapatilla WHERE modelo LIKE :busqueda");

    $busqueda = "%" . $data["busqueda"] . "%";

    $zapatillas->bindValue(":busqueda", $busqueda, PDO::PARAM_STR);

    $zapatillas->execute();

    $encontradas = $zapatillas->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($encontradas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
