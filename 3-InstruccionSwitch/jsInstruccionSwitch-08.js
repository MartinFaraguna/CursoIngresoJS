function mostrar() {
	let lugar;

	lugar = document.getElementById("txtIdDestino").value;

	switch (lugar) {

		case "Bariloche":
		case "Ushuaia":
			alert(`En ${lugar} hace frío`);
			break;
		case "Mar del plata":
		case "Cataratas":
			alert(`En ${lugar} hace calor`);
			break;

	}
}//FIN DE LA FUNCIÓN