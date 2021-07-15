function mostrar() {
	let precio = 15000;
	let estacion;
	let destino;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {

		case "Bariloche":
			if (estacion == "Invierno") {
				precioFinal = precio * 1.2;
			} else if (estacion == "Verano") {
				precioFinal = precio * .8;
			} else {
				precioFinal = precio * 1.1;
			}
			break;
		case "Cataratas":
			if (estacion == "Invierno") {
				precioFinal = precio * .9;
			} /*else if (estacion == "Verano") {
				precioFinal = precio * 1.1;
			}*/ else {
				precioFinal = precio * 1.1;
			}
			break;
		case "Mar del plata":
			if (estacion == "Invierno") {
				precioFinal = precio * .8;
			} else if (estacion == "Verano") {
				precioFinal = precio * 1.2;
			} else {
				precioFinal = precio * 1.1;
			}
			break;
		case "Cordoba":
			if (estacion == "Invierno") {
				precioFinal = precio * .9;
			} else if (estacion == "Verano") {
				precioFinal = precio * 1.1;
			} else {
				precioFinal = precio;
			}
			break;

	}

	alert(`El precio final es ${precioFinal}`);






	/*	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					preciofinal = precio * 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					preciofinal = precio * 0.9;
					break;
				case "Mar del plata":
					preciofinal = precio * .8;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					preciofinal = precio * .8;
					break;
				case "Cataratas":
				case "Cordoba":
					preciofinal = precio * 1.1;
					break;
				case "Mar del plata":
					preciofinal = precio * 1.2;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					preciofinal = precio * 1.1;
					break;
				case "Cordoba":
					preciofinal = precio;
					break;
			}
			break;
	}

	alert(`El precio final es ${preciofinal}`); */

	/*switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert(precio * 1.2);
					break;
				case "Cataratas":
				case "Cordoba":
					alert(precio * 0.9);
					break;
				case "Mar del plata":
					alert(precio * 0.8)
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					alert(precio * 0.8);
					break;
				case "Cataratas":
				case "Cordoba":
					alert(precio * 1.1);
					break;
				case "Mar del plata":
					alert(precio * 1.2)
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert(precio * 1.1)
					break;
				case "Cordoba":
					alert(precio);
					break;
			}
			break;
	} */

}//FIN DE LA FUNCIÓN