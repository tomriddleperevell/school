document.getElementById("signIn").addEventListener('click',login);

function login() {
	var userName = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;
	$.ajax({
		url: './login',
		data: {"username":userName,"password":password},
		type:'POST',
		success: function(response){
			console.log(response);
			window.location.href ="/mainPage.html";
		},
		error: function () {
			console.log("atastas");
		}
	});
}