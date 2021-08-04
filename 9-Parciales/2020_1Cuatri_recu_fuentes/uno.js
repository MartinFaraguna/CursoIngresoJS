/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar() {
	let tipo,
		precio,
		unidades,
		marca,
		fabricante,
		maxPrecioJa,
		cantCaroJa,
		fabricanteCaroJa,
		flag = 1,
		acumUnidJa = 0,
		acumUnidbar = 0,
		acumUnidAl = 0,
		contJa = 0,
		contBa = 0,
		contAl = 0,
		masUnidCant,
		tipoMasUnidades,
		promedio;


	for (let cont = 0; cont < 5; cont++) {

		tipo = prompt("Ingrese el tipo (barbijo/jabon/alcohol)").toLowerCase();
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("No es un tipo valido. Ingrese nuevamente (barbijo/jabon/alcohol").toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese precio (entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Precio no valido. Ingrese nuevamente (entre 100 y 300)"));
		}

		unidades = parseInt(prompt("Ingrese la cantidad de unidades (Entre 1 y 1000)"));
		while (isNaN(unidades) || unidades < 1 || unidades > 1000) {
			unidades = parseInt(prompt("Cantidad de unidades invalida. Ingrese nuevamente (Entre 1 y 1000)"));
		}

		marca = prompt("Ingrese la marca").toLowerCase();
		while (marca.length == 0) {
			marca = prompt("No ha ingresado. Ingrese la marca nuevamente").toLowerCase();
		}

		fabricante = prompt("Ingrese el fabricante").toLowerCase();
		while (fabricante.length == 0) {
			fabricante = prompt("No ha ingresado. Ingrese el fabricante nuevamente").toLowerCase();
		}

		if (tipo == "jabon") {
			//A
			if (flag || maxPrecioJa < precio) {
				maxPrecioJa = precio;
				cantCaroJa = unidades;
				fabricanteCaroJa = fabricante;
				flag = 0;
			}

			acumUnidJa += unidades;
			contJa++;

			console.log(maxPrecioJa + " " + cantCaroJa + " " + fabricanteCaroJa);

		} else if (tipo == "barbijo") {

			acumUnidbar += unidades;
			contBa++;

		} else {

			acumUnidAl += unidades;
			contAl++

		}

	}

	if (acumUnidJa > acumUnidbar && acumUnidJa > acumUnidAl) {
		tipoMasUnidades = acumUnidJa;
		masUnidCant = contJa;

	} else if (acumUnidbar >= acumUnidJa && acumUnidbar > acumUnidAl) {
		tipoMasUnidades = acumUnidbar;
		masUnidCant = contBa;
	} else {
		tipoMasUnidades = acumUnidAl;
		masUnidCant = contAl;
	}

	promedio = tipoMasUnidades / masUnidCant;

	// 	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	document.write(`Cantidad unidades jabon mas caro: ${cantCaroJa}. Fabricante: ${fabricanteCaroJa} <br>`);
	// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	document.write(`Promedio del tipo con más unidades en total por compra: ${promedio} <br>`);
	// c) Cuántas unidades de Barbijos se compraron en total
	document.write(`Unidades de barbijo: ${acumUnidbar}`);
}

/*
jabon 200 300 a Jabonnenoscaro
jabon 250 400 a jabonmascaro
barbijo 200 1000 a a
barbijo 270 600 a a
alcohol 200 3 a a

a) 400 jabonmascaro
b) 800
c) 1600
*/