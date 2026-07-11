<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

include "config.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// React se JSON data receive karo
$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

// Validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode([
        "status" => false,
        "message" => "All fields are required."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => false,
        "message" => "Invalid email."
    ]);
    exit;
}

// ======================
// Save to Database
// ======================

$sql = "INSERT INTO contacts(name,email,subject,message)
        VALUES(?,?,?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param("ssss",$name,$email,$subject,$message);

if(!$stmt->execute()){
    echo json_encode([
        "status"=>false,
        "message"=>"Database Error"
    ]);
    exit;
}

// ======================
// Send Gmail
// ======================

$mail = new PHPMailer(true);

try{

    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth=true;

    // Apna Gmail
    $mail->Username='sudhakumari91280@gmail.com';

    
    $mail->Password='ntrm bzvq vhln eihw';

    $mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port=587;

    $mail->setFrom('sudhakumari91280@gmail.com','Portfolio Website');

    
    $mail->addAddress('sudhakumari91280@gmail.com');

    $mail->isHTML(true);

    $mail->Subject="New Portfolio Contact Message";

    $mail->Body="
    <h2>New Contact Form Submission</h2>

    <b>Name:</b> {$name}<br><br>

    <b>Email:</b> {$email}<br><br>

    <b>Subject:</b> {$subject}<br><br>

    <b>Message:</b><br>
    {$message}
    ";

    $mail->send();

    echo json_encode([
        "status"=>true,
        "message"=>"Message sent successfully!"
    ]);

}catch(Exception $e){

    echo json_encode([
        "status"=>false,
        "message"=>"Mail Error : ".$mail->ErrorInfo
    ]);

}

$stmt->close();
$conn->close();

?>