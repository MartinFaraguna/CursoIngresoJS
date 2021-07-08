function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad >= 18){
		alert("Es mayor de edad");
	} else if (edad >= 13 && edad <= 17){
		alert("Es adolescente")
	} else {
		alert("Es un niño")
	}

}//FIN DE LA FUNCIÓN