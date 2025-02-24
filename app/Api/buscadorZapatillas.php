<?php

include "../Model/bbdd.php";

sleep(1);

// Obtener datos del cuerpo de la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);

// Establecer la cabecera para JSON
header('Content-Type: application/json');

try {

 


    switch ($data["ordenar"]) {
        case 0:
            $zapatillas = $conexion->prepare("SELECT * FROM zapatilla WHERE modelo LIKE :busqueda");
            break;

            case "precioAsc":
            $zapatillas = $conexion->prepare("SELECT * FROM zapatilla WHERE modelo LIKE :busqueda ORDER BY precio ASC");
            break;

            case "precioDesc":
                $zapatillas = $conexion->prepare("SELECT * FROM zapatilla WHERE modelo LIKE :busqueda ORDER BY precio DESC");
                break;
        
        default:
        $zapatillas = $conexion->prepare("SELECT * FROM zapatilla WHERE modelo LIKE :busqueda");
            break;
    }
    



    $busqueda = "%" . $data["busqueda"] . "%";

    $zapatillas->bindValue(":busqueda", $busqueda, PDO::PARAM_STR);

    $zapatillas->execute();

    $encontradas = $zapatillas->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($encontradas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}


?>
