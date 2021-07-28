/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------------------------------------------------------------------------------------------

Estrategia de resolucion
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces(van dentro del bucle)
 datos del producto
 2.1.1- pido tipo y valido
 2.1.2- pido precio y valido
 2.1.3- pido cantidad y valido
 2.1.4- pido marca y valido
 2.1.5- pido fabricante y valido
 -------------------------------
 a) me fijo si el produc tipoto es de alcohol y si es asi la primer vez que 
 ingresa alcohol guardo el precio en precio barato y las siguientes veces
 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)
 b) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
 c) si es de tipo jabon acumulo la cantidad(ya lo hice en el punto b)
-------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador
y sacar el promedio para ese tipo

3.2 muestro los resultados
*/

function mostrar() {
	let tipo,
		cantidad,
		precio,
		marca,
		fabricante,
		precioMinAl,
		cantAlBarato,
		fabAlBarato,
		flagA = 1,
		contadorB = 0,
		contadorA = 0,
		contadorJ = 0,
		maxUnidades,
		acumB = 0,
		acumA = 0,
		acumJ = 0,
		promedio;


	for (let i = 0; i < 5; i++) {

		tipo = prompt("Ingrese el tipo (barbijo/jabon/alcohol):").toLowerCase();
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("No es un tipo valido, ingreselo nuevamente (barbijo/jabon/alcohol)").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio (entre 100 y 300):"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseInt(prompt("Precio invalido. Ingrese el precio nuevamente (entre 100 y 300):"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad (entre 1 y 1000):"));
		while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
			cantidad = parseInt(prompt("Cantidad invalida. Ingrese la cantidad nuevamente (entre 1 y 1000):"));
		}

		marca = prompt("Ingrese marca");
		while (marca.length == 0) {
			marca = prompt("Ingrese marca");
		}

		fabricante = prompt("Ingrese fabricante");
		while (fabricante.length == 0) {
			fabricante = prompt("Ingrese fabricante");
		}

		if (tipo == "barbijo") {
			





		} else if (tipo == "jabon") {

		} else {
			/*	a) me fijo si el produc tipoto es de alcohol y si es asi la primer vez que 
	 ingresa alcohol guardo el precio en precio barato y las siguientes veces
	 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante) */

			if (flagA || precioMinAl > precio) {
				precioMinAl = precio;
				fabAlBarato = fabricante;
				cantAlBarato = cantidad;
				flagA = 0;
			}
			console.log(precioMinAl);
		}
	}
 
} //falta terminar
