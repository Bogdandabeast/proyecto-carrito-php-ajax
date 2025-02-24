<?php
session_start();

header('Content-Type: application/json');

/* if (!isset($_SESSION["INVITADO"])) {
    echo json_encode(['success' => false, 'error' => 'No esta iniciada la sesión.']);
    exit;
} */

$email = htmlspecialchars($_GET['email']);
$idPedido = htmlspecialchars($_GET['idPedido']);

if(!isset($email) || !isset($idPedido)) {
    die();
}

include("../Model/bbdd.php");

$sql = "SELECT 
            pedido.id AS pedido_id,
            pedido.precioTotal AS total,
            pedido.fecha AS pedido_fecha,
            pedido_zapatilla.idZapatilla AS id_zapatilla,
            pedido_zapatilla.cantidad AS cantidad,
            zapatilla.modelo AS modelo,
            zapatilla.imagen AS imagen,
            zapatilla.precio AS precio
        FROM usuario
        JOIN pedido ON usuario.id = pedido.idUsuario
        JOIN pedido_zapatilla ON pedido.id = pedido_zapatilla.idPedido
        LEFT JOIN zapatilla ON pedido_zapatilla.idZapatilla = zapatilla.id
        WHERE usuario.email = :email AND pedido.id = :idPedido
        ORDER BY pedido_id DESC";

try {
    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(':email', $email, PDO::PARAM_STR);
    $sentencia->bindParam(':idPedido', $idPedido, PDO::PARAM_INT);
    $sentencia->execute();
    $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    $carrito = [];

    foreach ($resultados as $fila) {
        $pedidoId = $fila['pedido_id'];

        if (!isset($carrito[$pedidoId])) {
            $carrito[$pedidoId] = [
                'idPedido'   => $pedidoId,
                'fecha'      => $fila['pedido_fecha'],
                'total'      => $fila['total'],
                'zapatillas' => [],
            ];
        }

        if (!empty($fila['id_zapatilla'])) {
            $modelo = !empty($fila['modelo']) ? $fila['modelo'] : 'Modelo no disponible';
            $imagen = !empty($fila['imagen']) ? $fila['imagen'] : 'imagen_no_disponible.png';

            $carrito[$pedidoId]['zapatillas'][] = [
                'idZapatilla' => $fila['id_zapatilla'],
                'cantidad'    => $fila['cantidad'],
                'modelo'      => $modelo,
                'imagen'      => $imagen,
                'precio'      => $fila['precio']
            ];
        }
    }

    // Reindexar los pedidos para que sea un array numérico
    $carrito = array_values($carrito);

    echo json_encode(["success" => true, "pedidos" => $carrito], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}
?>
