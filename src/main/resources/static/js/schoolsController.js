document.getElementById("schools").addEventListener('click',login);

function login() {
	console.log("ASRA");
	$.ajax({
		url: './schools',
		type:'GET',
		success: function(response){
			console.log(response);
		},
		error: function (response) {
			console.log(response);
			console.log("atastas");
		}
	});
}