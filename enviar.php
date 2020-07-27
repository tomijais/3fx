<?php  

// Llamando a los campos
$nombre = $_POST['name'];
$correo = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];

// Datos para el correo
$destinatario = "tomijais@gmail.com";

$correo = "De: $nombre \n";
$correo .= "Correo: $correo \n";
$correo .= "Asunto: $asunto \n";
$correo .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $correo);

?>