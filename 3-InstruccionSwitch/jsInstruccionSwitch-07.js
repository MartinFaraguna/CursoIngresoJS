function mostrar() {
	let lugar;

	lugar = document.getElementById("txtIdDestino").value;


	switch (lugar) {

		case "Bariloche":
			alert("Está al Oeste");
			break;
		case "Mar del plata":
			alert("Está al Este");
			break;
		case "Cataratas":
			alert("Está al Norte")
			break;
		case "Ushuaia":
			alert("Está al Sur");
			break;

	}
	// if (lugar == "Bariloche"){
	// 	alert("Está al Oeste");
	// } else if (lugar == "Mar del plata"){
	// 	alert("Está al Este");
	// } else if (lugar == "Cataratas"){
	// 	alert("Está al Norte");
	// } else if (lugar == "Ushuaia"){
	// 	alert("Está al Sur");
	// }

}//FIN DE LA FUNCIÓN