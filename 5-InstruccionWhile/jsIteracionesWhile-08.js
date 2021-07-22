/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	let numero;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let respuesta;
	let flag = 1;

	do {

		numero = parseInt(prompt("Ingrese un numero"));

		if (numero >= 0){
			acumuladorPositivos += numero;
		} else {
			acumuladorNegativos *= numero;
			flag = 0;
		}

		respuesta = prompt("Desea ingresar más? s/n").toLowerCase();

	} while (respuesta == 's');

	if (flag){
		acumuladorNegativos = 0
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN