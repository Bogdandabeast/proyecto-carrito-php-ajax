<?php

header('Content-Type: application/json');

include '../Model/bbdd.php';

//obtener los datos del cuerpo de la solicitud (en formato JSON)
$data = json_decode(file_get_contents("php://input"), true);
//si existe
if (isset($data['nombre'], $data['apellidos'], $data['email'], $data['clave'], $data['tipo'])) {

    $email = $data['email'];

    try {
        //verificar si el email ya existe en la base de datos
        $sql_check = "SELECT tipo FROM USUARIO WHERE email = :email";
        //preparar comando sql de chequear
        $stmt_check = $conexion->prepare($sql_check);
        //preparar parametros
        $stmt_check->bindParam(':email', $email);
        //executar
        $stmt_check->execute();
        //pruba de usuario existente
        $usuario_existente = $stmt_check->fetch(PDO::FETCH_ASSOC);
        //si usuario existente
        if ($usuario_existente) {
            //1º verificar si tu tipo es invitado
            if ($usuario_existente['tipo'] === 'INVITADO') {
                //si el usuario es INVITADO, actualizar a REGISTRADO solamente
                $sql_update = "UPDATE USUARIO SET tipo = 'REGISTRADO' WHERE email = :email";
                //preparar comando sql de actualizacion
                $stmt_update = $conexion->prepare($sql_update);
                //preparar parametros
                $stmt_update->bindParam(':email', $email);
                //executar con condicion
                if ($stmt_update->execute()) {
                    //volver mensaje de exito
                    echo json_encode(["success" => true, "message" => "Usuario actualizado a REGISTRADO."]);
                } else {
                    //volver mensaje de error
                    echo json_encode(["success" => false, "message" => "Error al actualizar usuario."]);
                }
            } else {
                //si el usuario ya existe con otro tipo, devolver mensaje de error
                echo json_encode(["success" => false, "message" => "El correo ya está registrado."]);
            }
        } else {
            //si el usuario no existe, proceder a insertarlo
            $hashed_password = password_hash($data['clave'], PASSWORD_DEFAULT);
            $sql_insert = "INSERT INTO USUARIO (nombre, apellidos, email, clave, tipo) 
                           VALUES (:nombre, :apellidos, :email, :clave, :tipo)";
            
            $stmt_insert = $conexion->prepare($sql_insert);
            $stmt_insert->bindParam(':nombre', $data['nombre']);
            $stmt_insert->bindParam(':apellidos', $data['apellidos']);
            $stmt_insert->bindParam(':email', $email);
            $stmt_insert->bindParam(':clave', $hashed_password);
            $stmt_insert->bindParam(':tipo', $data['tipo']);

            if ($stmt_insert->execute()) {
                //volver mensaje de exito
                echo json_encode(["success" => true, "message" => "Usuario registrado exitosamente."]);
            } else {
                //volver mensaje de error
                echo json_encode(["success" => false, "message" => "Error al insertar en la base de datos."]);
            }
        }
    } catch (PDOException $e) {
        //volver mensaje de error
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    //volver mensaje de error
    echo json_encode(["success" => false, "message" => "Faltan datos en la solicitud."]);
}

//cerrar la conexión a la base de datos
$conexion = null;

?>