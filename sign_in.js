// Aludra.Network Sign_In.js
// ========== || ===========
// This code sign_in.js client-side can be used on your apps or websites
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

// Sign in
$(document).ready(function() {
	var url = "your-file"; // Your Server-side file link url
	
	$("#loginButton").click(function(){ // Get from id your button
		var username= $.trim($("#username").val()); // Get data value your inputted username
		var password= $.trim($("#password").val()); // Get data value your inputted password

		var loginString ="username="+username+"&password="+password+"&login="; // Get inputted your data, for sent it use POST Ajax
		if($.trim(username).length>0 & $.trim(password).length>0) // Required input username and password
		{
			if($.trim(username).length>4){ // Username must be at least 5 characters
				if($.trim(password).length>7){
						$.ajax({
							type: "POST",crossDomain: true, cache: false,
							url: url,
							data: loginString,
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
									let timerInterval
									Swal.fire({
									  title: 'Sign in success!',
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
										sessionStorage.login="true"; // You can use localStorage too
										sessionStorage.username=username;
										sessionStorage.password=password;
										window.location.href = "index"; // After success sign in, redirecting to your index page on apps or website
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
								else if(data == "error")
								{
									Swal.fire({
									  text: 'Incorrect username or password!',
									  type: 'error',
									  confirmButtonText: 'Ok'
									})
								}
							}
						});
				} else {
					Swal.fire({
					  text: 'Password minimum 8 characters',
					  type: 'error',
					  confirmButtonText: 'Ok'
					})
				}return false;
			} else {
				Swal.fire({
				  text: 'Username minimum 5 characters',
				  type: 'error',
				  confirmButtonText: 'Ok'
				})
			}return false;
		} else {
			Swal.fire({
			  text: 'Fill in your username and password',
			  type: 'error',
			  confirmButtonText: 'Ok'
			})
		}return false;
	});
});
