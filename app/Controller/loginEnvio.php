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
            $_SESSION["nombreUsuario"] = $usuario['nombre'];

            echo json_encode(["success" => true, "message" => "has entrado"]);
        } else {
            echo json_encode(["success" => false, "message" => "Usuario o Contraeña Incorrecta"]);
        }
    } catch (PDOException $e) {

        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} elseif(isset($data['email']) && isset($data['codigo_pedido'])) {
     {

        include("../Model/bbdd.php");
    
        session_start();
    
        $email = htmlspecialchars($data['email']);
        $codigo_pedido = str_replace("#","",htmlspecialchars($data['codigo_pedido']));
        
    
                $sql = "SELECT usuario.email, usuario.tipo, usuario.id, pedido_zapatilla.idPedido FROM usuario JOIN pedido ON usuario.id = pedido.idUsuario JOIN pedido_zapatilla ON pedido.id = pedido_zapatilla.idPedido WHERE usuario.email = ?; 
                        ";
    
        try {
            $sentencia = $conexion->prepare($sql);
            $sentencia->execute([$email]);
            $usuario = $sentencia->fetch();
    

            if ($usuario && $usuario['tipo'] === 'INVITADO' && $usuario['idPedido'] == $codigo_pedido) {
    
                $_SESSION["INVITADO"] = $usuario['id'];
                $_SESSION["INVITADO_EMAIL"] = $usuario['email'];
                $_SESSION["INVITADO_PEDIDO"] = $usuario['idPedido'];

            
                echo json_encode(["success" => true, "message" => "has entrado"]);
            } else {
                echo json_encode(["success" => false, "message" => "Datos no coinciden en el invitado"]);
            }
        } catch (PDOException $e) {
    
            echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
        }
    }
}

