<?php
session_start();
//Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if (!isset($_SESSION["REGISTRADO"])) {
    echo json_encode(['error' => 'No esta iniciada la session.']);
    exit;
}

include("../Model/bbdd.php");


// Consulta SQL
$sql = " SELECT * FROM pedido JOIN pedido_zapatilla ON pedido.id = pedido_zapatilla.idPedido JOIN zapatilla ON pedido_zapatilla.idZapatilla = zapatilla.id WHERE pedido.idUsuario = :idUsuario";

try {

    $idUsuario = $_SESSION["REGISTRADO"];
    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(':idUsuario', $idUsuario, PDO::PARAM_INT);
    $sentencia->execute();
    $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["success" => true, "message" => $resultados]);
} catch (PDOException $e) {

    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}
