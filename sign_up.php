<?php
// Aludra.Network Sign_Up.php
// ========== || ===========
// This code sign_up.php is server-side can be used on your apps or websites
// Support Aludra Network project for more code on Github.
// You can ask about this code by sending a message to Linkedin CTO Aludra.Network, I will answer as best I can :)
// Website: https://aludra.network
/* Presale Info:
Don't forget to buy our presale which will start tomorrow.
Date and time:
August 5th at 2 PM UTC
Buy through the Smart Contract Aludra.Network
More info about presale join our telegram group:
Telegram group: https://t.me/AludraNetwork
Telegram channel: https://t.me/Aludranetworkofficial

Because it will support Aludra Network project to share more code on our Github :)
Thank you. */

include "your-database.php"; // Include your database php file
$username = $_POST['username']; // Get data username from sign_up.js
$email = $_POST['email']; // Get data email from sign_up.js
$password = $_POST['password']; // Get data password from sign_up.js

if(isset($_POST['register'])) // From data sent using POST Ajax in the sign_up.js file
{
	$register = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `users` WHERE `username`='$username' or `email`='$email' LIMIT 1")); // Query if username and password available
	if($register == 0)
	{
		$insert = mysqli_query($con,"INSERT INTO `users` (`username`,`email`,`password`) VALUES ('$username','$email','$password')"); // Query insert username,email and password to your database
		if($insert){
			echo "success";
		}
		else{
			echo "error";
		}
	}
	else if($register != 0){
		echo "exist";
	}
}
mysqli_close($con);
?>
