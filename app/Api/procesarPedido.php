<?php


$data = json_decode(file_get_contents("php://input"),true);
session_start();
if(isset($_SESSION["REGISTRADO"])){

    include "../Model/bbdd.php";
    $data = json_decode(file_get_contents('php://input'), true);
    header('Content-Type: application/json');

    
    $pedido = $conexion->prepare("INSERT INTO pedido (idUsuario,precioTotal) VALUES (:idUsuario,:precio)");
    $pedido->bindParam(':idUsuario', $_SESSION["REGISTRADO"]);
    $pedido->bindParam(':precio', $data['total']);
    $pedido->execute();

    if( $pedido->execute()){
        $idPedido = $conexion->lastInsertId();
    
        foreach($data['carrito'] as $producto){
    
            $agregarZapatilla = $conexion->prepare("INSERT INTO pedido_zapatilla (idPedido,idZapatilla,cantidad) VALUES (:idpedido,:idzapatilla,:cantidad)");
            $agregarZapatilla->bindParam(':idpedido', $idPedido);
            $agregarZapatilla->bindParam(':idzapatilla', $producto["id"]);
            $agregarZapatilla->bindParam(':cantidad', $producto["cantidad"]);
            $agregarZapatilla->execute();
        }   
    
        $resultado = [
            "procesado" => true,
            "mensaje" => ""
        ];
    }else{
        $resultado = [
            "procesado" => false,
            "mensaje" => "Hubo un problema al insertar"
        ];
    }

    
}else{

    // Registrar Invitado
            include "../Model/bbdd.php";
            $registroInvitado = $conexion->prepare('INSERT INTO USUARIO (email, tipo) VALUES (:email, "INVITADO")');
            $registroInvitado->bindParam(':email', $data['email']);
            
            if ($registroInvitado->execute()) {
                //volver mensaje de exito
                $resultado = ["success" => false, "message" => $conexion->lastInsertId()];
                $idUsuario = $conexion->lastInsertId();
                $pedido = $conexion->prepare("INSERT INTO pedido (idUsuario,precioTotal) VALUES (:idUsuario,:precio)");
                $pedido->bindParam(':idUsuario', $idUsuario);
                $pedido->bindParam(':precio', $data['total']);
    

                if($pedido->execute()){
                    $idPedido = $conexion->lastInsertId();
    
                    foreach($data['carrito'] as $producto){
                        $agregarZapatilla = $conexion->prepare("INSERT INTO pedido_zapatilla (idPedido,idZapatilla,cantidad) VALUES (:idpedido,:idzapatilla,:cantidad)");
                        $agregarZapatilla->bindParam(':idpedido', $idPedido);
                        $agregarZapatilla->bindParam(':idzapatilla', $producto["id"]);
                        $agregarZapatilla->bindParam(':cantidad', $producto["cantidad"]);
                        $agregarZapatilla->execute();
                    }   
                }

                $resultado =["procesado" => true, "mensaje" => "Pedido <strong>#$idPedido</strong> Inicia como invitado con email y codigo pedido"];
            } else {
                //volver mensaje de error
                $resultado =["procesado" => false, "mensaje" => "Error al insertar en la base de datos."];
            }



}

echo json_encode($resultado );


?>



