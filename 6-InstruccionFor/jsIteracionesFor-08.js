//primos: solamente divisibles por 1 y por si mismo.
function mostrar() {

	let num;
	let cant = 0;

	num = parseInt(prompt("Ingrese hasta que numero"));
	while (isNaN(num) || num < 0) {
		num = parseInt(prompt("No es un numero o es negativo, ingrese uno nuevamente"));
	}

	for (let i = 1; i <= num; i++) {
		if (num % i) {
			continue;
		}
		cant++
	}

	if (cant == 2){
		console.log("El numero " + num + " es primo");
	} else {
		console.log("El numero " + num + " no es primo");
	}

}//FIN DE LA FUNCIÓN