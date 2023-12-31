<?php

########### CONFIG ###############

$recipient = 'mail@dianaasmus.com'; # Bitte hier deine E-Mail angeben

########### CONFIG END ###########

########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#     [email] The sender's email address
#
##################################

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $name = $_POST['name'];
        $email = $_POST['email'];

        $subject = "Portfolio message";
        $headers = "From: " . $name . " <" . $email . ">";

        mail($recipient, $subject, $_POST['message'], $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}