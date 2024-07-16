<?php
require '../libraries/PHPMailer/src/PHPMailer.php';
require '../libraries/PHPMailer/src/Exception.php';
require '../libraries/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    // $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    // $tel = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_STRING);
    $description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
    
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    // $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    // $tel = htmlspecialchars($tel, ENT_QUOTES, 'UTF-8');
    $description = htmlspecialchars($description, ENT_QUOTES, 'UTF-8');
    
    $errors = array();

    if (strlen($name) < 3) {
        $errors[] = 'name';
    } 
    
    // if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     $errors[] = 'email';
    // } 
    
    // if (!empty($tel) && !preg_match('/^(\+48|0048)?[\s.-]?(\d{2})?[\s.-]?\d{3}[\s.-]?\d{3}[\s.-]?\d{3}$|^(\+48|0048)?[\s.-]?\d{3}[\s.-]?\d{3}[\s.-]?\d{3}$/', $tel)) {
    //     $errors[] = 'tel';
    // } 
    
    if (strlen($description) < 1) {
        $errors[] = 'description';
    }

    if (!empty($errors)) {
        $response = array('success' => false, 'errors' => $errors);
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'test@gmail.com';
        $mail->Password = 'abcd abcd abcd abcd';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('example@gmail.com', 'Example-name');
        $mail->addAddress('example123@gmail.com', 'Example-name123');
        $subject = "[Example] Kontakt " . $_POST['name'] . " <" . $_SERVER['REMOTE_ADDR'] . ">";
        $mail->Subject = mb_encode_mimeheader($subject, "UTF-8", "Q");

        $body = "Imię: $name\n";
        // $body .= "Adres e-mail: $email\n";
        // $body .= "Numer telefonu: $tel\n";
        $body .= "Opis: $description\n";

        $mail->Body = $body;

        if ($mail->send()) {
            $response = array('success' => true);
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = array('success' => false, 'error' => $mail->ErrorInfo);
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
} catch (Exception $e) {
    $response = array('success' => false, 'error' => $e->getMessage());
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>