document.getElementById("login").addEventListener('click',login);
function login() {
	var userName = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;
	$.ajax({
		url: './login',
		data: {"username":userName,"password":password},
		type:'POST',
		success: function(response){
			console.log(response["username"]);
			//window.location.href ="/searchPage.html";
			location.hash = ("#homepage/"+response["username"]);
		},
		error: function () {
			window.alert("wrong credentials")
		}
	});
}