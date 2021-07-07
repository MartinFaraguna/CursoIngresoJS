/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num1 + num2;
	// num1 = document.getElementById("txtIdNumeroUno").value;
	// num2 = document.getElementById("txtIdNumeroDos").value;
	// num1 = parseInt(num1);
	// num2 = parseInt(num2);

	// suma = parseInt(num1) + parseInt(num2);

	alert(`la suma es ${suma}`);
}

