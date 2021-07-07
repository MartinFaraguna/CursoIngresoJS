/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let suma = num1 + num2;
	alert(`la suma es ${suma}`)
}

function restar()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let restar = num1 - num2
	alert(`la resta es ${restar}`)
}

function multiplicar()
{ 
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let multiplicar = num1*num2
	alert(`la multiplicacion da ${multiplicar}`)
}

function dividir()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let dividir = num1/num2
	alert(`la division da ${dividir}`);
}

