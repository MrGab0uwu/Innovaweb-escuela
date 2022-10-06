<?php 

//ini_set("display_error", 1);

require "lib_email/src/Exception.php";
require "lib_email/src/PHPMailer.php";
require "lib_email/src/SMTP.php";
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$nombre = $_POST['firstname'];
$email = $_POST['email'];
$telefono = $_POST['phone'];
$institucion = $_POST['institucion'];

$body  = 'Nombre: ' . $nombre . " \n";
$body .= 'Telefono: ' . $telefono . "\n";
$body .= 'Correo Electronico: ' . $email . " \n";
$body .= 'Institucion: ' . $institucion . "\n";

    $oMail= new PHPMailer();
    $oMail->isSMTP();
    $oMail->Host="outlook.office365.com";
    $oMail->Port=587;
    $oMail->SMTPSecure="tls";
    $oMail->SMTPAuth=true;
    $oMail->Username="info@yubare.com";
    $oMail->Password = 'Inovaweb2004';
    $oMail->setFrom("info@yubare.com","Web Escolar");
    $oMail->addAddress("conrado.torres@inovaweb.com.mx",'Web Escolar Contacto');
    $oMail->Subject='Web Escolar Contacto - ' . $institucion;
    $oMail->Body = "
            Nuevo contacto desde pagina web de Web Escolar \n".
			$body; 
    
    $oMail->send();

  
?>