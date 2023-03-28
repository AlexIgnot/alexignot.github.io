var objAlumno = {
	matricula:"",
	nombre:"",
	carrera: ""
};

var myAlumnoJson;
var otherAlumno = {};

function convertObjToJson(){

	var matriculaElement = document.getElementByID("matricula");
	var nombreElement = document.getElementByID("nombre");
	var carreraElemnt = document.getElementByID("carrera");

	objAlumno.matricula = matriculaElement.value;

	objAlumno.nombre = nombreElement.value;
	
	objAlumno.carrera = carreraElement.value;

	console.log(objAlumno);
	myAlumnoJson = JSON.stringify(objAlumno);
	console.log(myAlumnoJson);

	var jsonElement = document.getElementById("myjson");
	jsonElement.innerHTML = myAlumnoJson;

}

function convertJsonToObj(){

	var jsonElement = document.getElementById("myjson");
	var otherAlumno = JSON.parse(jsonElement.innerHTML);

	console.log(otherAlumno);
	console.log(otherAlumno.matricula);
	console.log(otherAlumno.nombre);
	console.log(otherAlumno.carrera);

	document.getElementByID("newMatricula").innertHTML = otherAlumno.matricula;

	document.getElementByID("newNombre").innertHTML = otherAlumno.nombre;

	document.getElementByID("newCarrera").innertHTML = otherAlumno.carrera;

}






