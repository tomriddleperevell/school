document.getElementById("schoolsSearch").addEventListener('click',search);

loadRegions();
loadCities();
function loadRegions() {
	$.ajax({
		url: './schools/regions',
		type:'GET',
		success: function(response){
			populateCombo(response, "selectRegion");
		},
		error: function (response) {
			console.log(response);
			console.log("error");
		}
	});
}

function populateCombo(list, elementName) {
	let select = document.getElementById(elementName);

	for(let i = 0; i < list.length; i++) {
		let opt = list[i]
		let el = document.createElement("option");
		el.textContent = opt["name"];
		el.value = opt["id"];
		select.appendChild(el);
	}
}

function loadCities() {
	$.ajax({
		url: './schools/cities',
		type:'GET',
		success: function(response){
			populateCombo(response, "selectCity")
		},
		error: function (response) {
			console.log(response);
			console.log("error");
		}
	});
}

function search() {
	console.log("ASRA");
	var name = document.getElementsByName("name")[0].value;
	var number = document.getElementsByName("number")[0].value;
	console.log(name);
	console.log(number);
	$.ajax({
		url: './schools',
		type:'GET',
		data: {"name":name},
		success: function(response){
			console.log(response);
		},
		error: function (response) {
			console.log(response);
			console.log("error");
		}
	});
}