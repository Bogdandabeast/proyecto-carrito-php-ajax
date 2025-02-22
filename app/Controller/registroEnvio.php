<?php

header('Content-Type: application/json');

include '../Model/bbdd.php';

// Obtener los datos del cuerpo de la solicitud (en formato JSON)
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['nombre'], $data['apellidos'], $data['email'], $data['clave'], $data['tipo'])) {

    $hashed_password = password_hash($data['clave'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuario(nombre, apellidos, email, clave, tipo) VALUES(:nombre, :apellidos, :email, :clave, :tipo)";
    
    try {
        $stmt = $conexion->prepare($sql);

        $stmt->bindParam(':nombre', $data['nombre']);
        $stmt->bindParam(':apellidos', $data['apellidos']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':clave', $hashed_password);
        $stmt->bindParam(':tipo', $data['tipo']);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            // Si el registro es exitoso, devolver una respuesta JSON de éxito
            echo json_encode(["success" => true]);
        } else {
            // Si hubo un error al insertar, devolver un mensaje de error
            echo json_encode(["success" => false, "message" => "Error al insertar en la base de datos."]);
        }
    } catch (PDOException $e) {
        // Si ocurre una excepción, devolver un mensaje de error
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    // Si no se reciben todos los datos necesarios
    echo json_encode(["success" => false, "message" => "Faltan datos en la solicitud."]);
}

// Cerrar la conexión a la base de datos
$conexion = null;
?>
