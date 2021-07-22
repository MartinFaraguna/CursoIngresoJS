/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables

	let numero,
		maximo,
		minimo,
		flag = 1,
		seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("No es un numero. Intente ingresar un numero nuevamente"));
		}

		if (flag || numero > maximo) {
			maximo = numero;
		} 
		if (flag || numero < minimo) {
			minimo = numero;
			flag = 0
		}
		
		/*
		if (flag) {
			maximo = numero;
			minimo = numero;
			flag = 0;
		} else if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		} */

		seguir = prompt("Quiere ingresar otro numero? s/n").toLowerCase();
	} while (seguir == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN