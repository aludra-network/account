// Aludra.Network Sign_Up.js
// ========== || ===========
// This code sign_up.js client-side can be used on your apps or websites
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

// Function for validate email, must be use "@" and domain
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Sign up
$(document).ready(function() {
	var url = "your-file"; // Your Server-side file link url

	$("#registerButton").click(function(){ // Get from id your button
		var username= $.trim($("#username").val()); // Get data value your inputted username
		var email= $.trim($("#email").val()); // Get data value your inputted email
		var password= $.trim($("#password").val()); // Get data value your inputted password

		var dataString="username="+username+"&email="+email+"&password="+password+"&register="; // Get inputted your data, for sent it use POST Ajax
		if($.trim(username).length>0 & $.trim(email).length>0 & $.trim(password).length>0) // Required input username,email and password
		{
			if($.trim(username).length>4) { // Username must be at least 5 characters
				if($.trim(password).length>7) {
					if(validateEmail(email)) { // Using function validate email
						$.ajax({
							type: "POST",crossDomain: true, cache: false,
							url: url,
							data: dataString,
							beforeSend: function() {
								Swal.fire({ // Use sweetalert plugin CDN
									  timer: 1000,
									  onBeforeOpen: () => {
										Swal.showLoading()
										timerInterval = setInterval(() => {
										  Swal.getContent().querySelector('strong')
											.textContent = Swal.getTimerLeft()
										}, 100)
									  },
									  onClose: () => {
										clearInterval(timerInterval)
									  }
									}).then((result) => {
									  if (
										// Read more about handling dismissals
										result.dismiss === Swal.DismissReason.timer
									  ) {
										console.log('I was closed by the timer')
									  }
								})
							},
							success: function(data){
								if(data == "success") {
									Swal.fire({
									  title: 'Sign up successful!',
									  type: 'success',
									  timer: 2000,
									  onBeforeOpen: () => {
										Swal.showLoading()
										timerInterval = setInterval(() => {
										  Swal.getContent().querySelector('strong')
											.textContent = Swal.getTimerLeft()
										}, 100)
									  },
									  onClose: () => {
										clearInterval(timerInterval)
										window.location.href = "login"; // After success sign up, redirecting to your login page on apps or website
									  }
									}).then((result) => {
									  if (
										// Read more about handling dismissals
										result.dismiss === Swal.DismissReason.timer
									  ) {
										console.log('I was closed by the timer')
									  }
									})
								}
								else if( data == "exist") {
									Swal.fire({
									  text: 'Sorry, that username or email is already registered',
									  type: 'error',
									  confirmButtonText: 'Ok'
									})
								}
								else {
									Swal.fire({
									  text: 'Sign up failed!',
									  type: 'error',
									  confirmButtonText: 'Ok'
									})
								}
							}
						});
					} else {
						Swal.fire({
						  text: 'Invalid email, use valid email: youremail@domain.com',
						  type: 'error',
						  confirmButtonText: 'Ok'
						})
					}return false;
				} else {
					Swal.fire({
					  text: 'The password must be at least 8 characters long',
					  type: 'error',
					  confirmButtonText: 'Ok'
					})
				}return false;
			} else {
				Swal.fire({
				  text: 'Username minimum 5 charaters',
				  type: 'error',
				  confirmButtonText: 'Ok'
				})
			}return false;
		} else {
			Swal.fire({
			  text: 'Complete all the forms',
			  type: 'error',
			  confirmButtonText: 'Ok'
			})
		}return false;
	});
});
