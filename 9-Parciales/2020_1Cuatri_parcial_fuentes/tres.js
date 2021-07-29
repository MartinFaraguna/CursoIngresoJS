/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m"), 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar() {
	let nombre,
		edad,
		sexo,
		estadoCivil,
		temperatura,
		sigue,
		nombreMaxTemp,
		maxTemp,
		flag = 1,
		contMayoresViudos = 0,
		contHombresSoV = 0,
		contTerceraEdadTemp = 0,
		acumEdad = 0,
		contHombres = 0,
		promedio;

	do {
		//Ingreso de datos y validacion
		nombre = prompt("Ingrese nombre");
		while (nombre == "") {
			nombre = prompt("Nombre invalido, ingreselo nuevamente");
		}

		edad = parseInt(prompt("Ingrese la edad").toLowerCase());
		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("Edad invalida. Ingresela nuevamente").toLowerCase());
		}

		sexo = prompt("Ingrese sexo (m/f)").toLowerCase();
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Sexo invalido. Ingreselo nuevamente").toLowerCase();
		}

		estadoCivil = prompt("Ingrese estado civil (soltero/casado/viudo)").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Estado civil invalido. Ingreselo nuevamente").toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese la temperatura").toLowerCase());
		while (isNaN(temperatura) || temperatura < 0) {
			temperatura = parseInt(prompt("temperatura invalida. Ingresela nuevamente").toLowerCase());
		}

		//A
		while (flag || maxTemp < temperatura) {
			maxTemp = temperatura;
			nombreMaxTemp = nombre;
			flag = 0;
		}
		//B
		if (edad >= 18 && estadoCivil == "viudo") {
			contMayoresViudos++;
		}
		//C
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			contHombresSoV++;
		}
		//D
		if (edad > 60 && temperatura > 38){
			contTerceraEdadTemp++;
		}
		//E
		if (sexo == "m" && estadoCivil == "soltero"){
			acumEdad += edad;
			contHombres++;
		}

		sigue = prompt("Agregar mas personas? s/n").toLowerCase();
	} while (sigue == "s")

	promedio = acumEdad / contHombres;

	//A
	document.write(`${nombreMaxTemp} tiene la mayor temperatura con ${maxTemp} grados.<br>`);
	//B
	document.write(`Hay ${contMayoresViudos} mayores de edad viudos.<br>`);
	//C
	document.write(`Hay ${contHombresSoV} hombres solteros o viudos.<br>`);
	//D
	document.write(`${contTerceraEdadTemp} personas de la tercera edad tienen más de 38 de temperatura.<br>`);
	//E
	document.write(`El promedio de edad entre los hombres solteros es ${promedio}.`);

}
