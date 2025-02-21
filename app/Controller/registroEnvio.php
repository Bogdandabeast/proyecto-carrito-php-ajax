<?php
//Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Conexión a la base de datos
include '../Model/bbdd.php';

//Obtener los datos del cuerpo de la solicitud (en formato JSON)
$data = json_decode(file_get_contents("php://input"), true);

//verificar que los datos estén presentes
if (isset($data['nombre'], $data['apellidos'], $data['email'], $data['clave'], $data['tipo'])) {
    //hash de la contraseña
    $hashed_password = password_hash($data['clave'], PASSWORD_DEFAULT);

    //preparar la consulta SQL con parámetros
    $sql = "INSERT INTO usuario(nombre, apellidos, email, clave, tipo) VALUES(?, ?, ?, ?, ?)";
    
    if ($stmt = $conexion->prepare($sql)) {
        //enlazar los parámetros
        $stmt->bind_param("sssss", $data['nombre'], $data['apellidos'], $data['email'], $hashed_password, $data['tipo']);
        
        try {
            //ejecutar la consulta
            if ($stmt->execute()) {
                //si el registro es exitoso, devolver una respuesta JSON de éxito
                echo json_encode(["success" => true]);
            } else {
                //si hubo un error al insertar, devolver un mensaje de error
                echo json_encode(["success" => false, "message" => "Error al insertar en la base de datos."]);
            }
        } catch (Exception $e) {
            //si ocurre una excepción, devolver un mensaje de error
            echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
        }
        
        //cerrar la consulta
        $stmt->close();
    } else {
        //si no se pudo preparar la consulta
        echo json_encode(["success" => false, "message" => "Error al preparar la consulta SQL."]);
    }
} else {
    //si no se reciben todos los datos necesarios
    echo json_encode(["success" => false, "message" => "Faltan datos en la solicitud."]);
}

//cerrar la conexión a la base de datos
$conexion->close();
?>