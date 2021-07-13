function mostrar() {
	let max = 10;
	let min = 1;
	let random;

	random = Math.floor(Math.random() * (max - min + 1) + min);
	console.log(random)

	if (random < 4) {
		alert("Vamos, la proxima se puede")
	} else if (random < 9) {
		alert("APROBÓ")
	} else {
		alert("EXCELENTE")
	}

}//FIN DE LA FUNCIÓN