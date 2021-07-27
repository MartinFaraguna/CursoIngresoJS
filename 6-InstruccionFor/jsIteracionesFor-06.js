function mostrar() {
	let num;
	let cant = 0;

	num = parseInt(prompt("Ingrese hasta que numero"));
	while (isNaN(num) || num < 0) {
		num = parseInt(prompt("No es un numero o es negativo, ingrese uno nuevamente"));
	}

	for (let i = 0; i <= num; i++) {
		if (i % 2) {
			continue;
		}
		console.log(i);
		cant++
	}

	console.log(`La cantidad de numeros pares es ${cant}`);

}//FIN DE LA FUNCIÓN