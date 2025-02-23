<?php
//Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8'); //define el header que espera
$max_size = 1024 * 1024; //tamaño max de json que recibimos, 1mb;

//si el mime es un meme y no es un json mandar a tomar vientos
/* if ($_SERVER['CONTENT_TYPE'] !== 'application/json') {
    http_response_code(415);
    echo json_encode(['error' => 'Se esperaba un tipo de contenido application/json.']);
    exit;
} */

//coger archivo 
$json = file_get_contents('php://input'); //


//comprobar tamaño
if (strlen($json) > $max_size) {
    http_response_code(413);
    echo json_encode(['error' => 'El JSON es demasiado grande.']);
    exit;
}

//decodificar
$data = json_decode($json, associative: true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'El JSON proporcionado no es válido.']);
    exit;
}



if (isset($data['email']) && isset($data['clave'])) {

    include("../Model/bbdd.php");

    session_start();

    $email = htmlspecialchars($data['email']);
    $clave = $data['clave'];

    $sql = "SELECT * FROM usuario WHERE email = ?";

    try {
        $sentencia = $conexion->prepare($sql);
        $sentencia->execute([$email]);
        $usuario = $sentencia->fetch();

        


        if ($usuario && password_verify($clave, $usuario['clave'])) {

            $_SESSION["REGISTRADO"] = $usuario['id'];

            echo json_encode(["success" => true, "message" => "has entrado"]);
        } else {
            echo json_encode(["success" => false, "message" => "datos no coinciden"]);
        }
    } catch (PDOException $e) {

        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} elseif(isset($data['email'])) {
     {

        include("../Model/bbdd.php");
    
        session_start();
    
        $email = htmlspecialchars($data['email']);
    
        $sql = "SELECT * FROM usuario WHERE email = ?";
    
        try {
            $sentencia = $conexion->prepare($sql);
            $sentencia->execute([$email]);
            $usuario = $sentencia->fetch();
    

            if ($usuario && $usuario['tipo'] === 'INVITADO') {
    
                $_SESSION["INVITADO"] = $usuario['id'];
            
                echo json_encode(["success" => true, "message" => "has entrado"]);
            } else {
                echo json_encode(["success" => false, "message" => "datos no coinciden en el invitado"]);
            }
        } catch (PDOException $e) {
    
            echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
        }
    }
}

