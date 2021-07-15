function mostrar() {

	let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;

	while (contador < 5) {
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador += numero;
		contador++;
	}

	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	/*	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let sumatoria;
	let promedio;

	num1 = parseInt(prompt("Ingrese un numero"));
	num2 = parseInt(prompt("Ingrese un numero"));
	num3 = parseInt(prompt("Ingrese un numero"));
	num4 = parseInt(prompt("Ingrese un numero"));
	num5 = parseInt(prompt("Ingrese un numero"));

	sumatoria = num1 + num2 + num3 + num4 + num5;
	promedio = sumatoria / 5;

	document.getElementById("txtIdSuma").value = sumatoria;
	document.getElementById("txtIdPromedio").value = promedio;
*/
}//FIN DE LA FUNCIÓN