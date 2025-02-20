<?php



// Con esto controlamos el Header dependiendo si esta o no logeado el cliente
if(isset($_SESSION["userID"])){
    include 'View/headerUser.php';
}else{
    include 'View/headerGuest.php';
}

?>