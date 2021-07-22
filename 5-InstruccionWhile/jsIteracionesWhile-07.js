/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {

	let numero = 0;
	let acumulador = 0;
	let contador = 0;
	let respuesta;
	let prom;

	do {
		numero = parseInt(prompt("Ingrese numero"));
		acumulador += numero;
		contador++;
		respuesta = prompt("Desea ingresar otro numero? s/n");
	} while (respuesta == 's');

	prom = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = prom;


}//FIN DE LA FUNCIÓN