<?php

$name = $_POST['yourname']??'';
$email = $_POST['email']??'';
$message = $_POST['message']??'';

$data = "Clients Name: $name
	 Clients Email: $email
	 Clients Message: $message\n\n";

$file = fopen("Clients message.txt","a");
	fwrite($file, $data);
	fclose($file);

echo"<h1> Thank you for consulting us, we will get in touch</h1> "

?>