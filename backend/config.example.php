<?php

$host = "YOUR_HOST";
$username = "YOUR_USERNAME";
$password = "YOUR_PASSWORD";
$database = "YOUR_DATABASE";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection Failed");
}

$conn->set_charset("utf8");

// Gmail SMTP
$mailUsername = "sudhakumari91280@gmail.com";
$mailPassword = "ntrm bzvq vhln eihw";

?>