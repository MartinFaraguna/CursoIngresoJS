//numero positivo
//preguntar si es un numero

function mostrar() {

	let cantidad;

	cantidad = parseInt(prompt("Ingrese la cantidad de veces"));
	while (isNaN(cantidad) || cantidad < 0) {
		cantidad = parseInt(prompt("No es un numero o es menor a 0, ingrese nuevamente"));
	}

	for (let contador = 0; contador < cantidad; contador++) {
		console.log("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN