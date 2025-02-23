<?php


$data = json_decode(file_get_contents("php://input"),true);
session_start();
if(isset($_SESSION["REGISTRADO"])){

    include "../Model/bbdd.php";
    $data = json_decode(file_get_contents('php://input'), true);
    header('Content-Type: application/json');

    
    $pedido = $conexion->prepare("INSERT INTO pedido (idUsuario,precioTotal) VALUES (:idUsuario,:precio)");
    $pedido->bindParam(':idUsuario', $data['total']);
    $pedido->bindParam(':precio', $_SESSION["REGISTRADO"]);
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


}

echo json_encode($resultado );


?>



