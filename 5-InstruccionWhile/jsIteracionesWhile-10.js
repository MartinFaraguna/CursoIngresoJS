/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero,
		sumaNeg = 0,
		sumaPos = 0,
		acumNeg = 0,
		acumPos = 0,
		ceros = 0,
		pares = 0,
		promedioPos = 0,
		promedioNeg = 0,
		flagN = 0,
		flagP = 0,
		diff,
		respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("No es un numero. Ingrese un numero nuevamente"));
		}

		if (numero > 0) {
			sumaPos += numero; //suma de los positivos
			acumPos++; // Cantidad de positivos.
			flagP = 1;
		} else if (numero < 0) {
			sumaNeg += numero; //suma de los negativos
			acumNeg++; // Cantidad de negativos.
			flagN = 1;
		} else {
			ceros++;
		}

		if (numero % 2 == 0) {
			pares++;
		}

		respuesta = prompt("Desea continuar ingresando numeros? s/n").toLowerCase();
	} while (respuesta == 's');

	if (flagP) {
		promedioPos = sumaPos / acumPos;
	}
	if (flagN) {
		promedioNeg = sumaNeg / acumNeg;
	}

	diff = acumPos - acumNeg;

	alert(`suma neg ${sumaNeg}. \nsuma pos ${sumaPos}. \ncant pos ${acumPos}. \ncant neg ${acumNeg}. \ncant ceros ${ceros}. \ncant pares ${pares}. \nprom pos ${promedioPos}. \nprom neg ${promedioNeg}. \ndiff ${diff}`)

	// 4 2 6 8 -4 -4 0 0 
	// sumaneg = -8
	// sumapos = 20
	// acumpos = 4
	// acumneg = 2
	// ceros = 2
	// pares = 8
	// promsum = 5
	// promneg = -4
	// diff = 2

}//FIN DE LA FUNCIÓN