/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar() {
	let nombre,
		nacionalidad,
		edad,
		sexo,
		estadoCivil,
		temperatura,
		maxTemp,
		maxTempNac,
		flag = 1,
		contMayoresSolt = 0,
		contFSoltViud = 0,
		contTerTemp = 0,
		contFCasada = 0,
		acumFCasada = 0,
		promedio,
		seguir;

	do {

		nombre = prompt("Ingrese el nombre").toLowerCase();
		while (nombre.length == 0) {
			nombre = prompt("No ha ingresado. Ingrese el nombre nuevamente").toLowerCase();
		}
		
		nacionalidad = prompt("Ingrese la nacionalidad").toLowerCase();
		while (nacionalidad.length == 0) {
			nacionalidad = prompt("No ha ingresado. Ingrese la nacionalidad nuevamente").toLowerCase();
		}
		
		edad = parseInt(prompt("Ingrese la edad"));
		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("No ha ingresado una edad valida. Ingresela nuevamente"));
		}
		
		sexo = prompt("Ingrese genero (m/f)").toLowerCase();
		while (sexo != "m" && sexo != "f"){
			sexo = prompt("Genero invalido. Ingreselo nuevamente (m/f)").toLowerCase();
		}
		
		estadoCivil = prompt("Ingrese el estado civil (soltero/casado/viudo)").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Estado civil invalido. Ingreselo nuevamente (soltero/casado/viudo)").toLowerCase();
		}

		temperatura = parseInt(prompt("Ingrese temperatura corporal"));
		while (isNaN(temperatura)){
			temperatura = parseInt(prompt("No es un numero. Ingrese temperatura corporal nuevamente"));
		}
		
		// a) la Nacionalidad de la persona con mas temperatura.
		if (flag || maxTemp < temperatura){
			maxTemp = temperatura;
			maxTempNac = nacionalidad;
			flag = 0;
		}

		// b) Cuantos mayores de edad( más de 17) estan solteros
		if (edad > 17 && estadoCivil == "soltero"){
			contMayoresSolt++;
		}

		// c) La cantidad de Mujeres que hay solteras o viudas.
		if (sexo == "f" && estadoCivil == "soltero" || estadoCivil == "viudo"){
			contFSoltViud++;
		}

		// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 60 && temperatura > 38){
			contTerTemp++;
		}

		// e) El promedio de edad entre las mujeres casadas.
		if (sexo == "f" && estadoCivil == "casado"){
			contFCasada++;
			acumFCasada += edad;
		}


		seguir = prompt("Desea seguir ingresando? (s/n)").toLowerCase();

	} while (seguir == "s");

	promedio = acumFCasada / contFCasada; // E

	document.write(`La Nacionalidad de la persona con mas temperatura: ${maxTempNac} <br>`);
	document.write(`Mayores de edad solteros: ${contMayoresSolt} <br>`);
	document.write(`Mujeres solteras o viudas: ${contFSoltViud} <br>`);
	document.write(`Tercera edad con más de 38 de temperatura: ${contTerTemp} <br>`);
	document.write(`Promedio de Edad entre mujeres casadas: ${promedio} `);
}
