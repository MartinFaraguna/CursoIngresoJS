/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/


function mostrar() {
  let tipo,
    cantidad,
    precio,
    seguir,
    descuento,
    importe,
    importeBruto = 0,
    importeNeto,
    acumBolsas = 0,
    mayorPrecio,
    mayorTipo,
    flag = 1,
    acumuladorBCal = 0,
    acumuladorBA = 0,
    acumuladorCem = 0,
    tipoMaxBolsas,
    cantMaxBolsas;


  do {
    tipo = prompt("Ingrese el tipo de bolsa (arena, cal o cemento):").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("No es un tipo valido. Ingrese nuevamente. (arena, cal o cemento)").toLowerCase();
    }

    cantidad = parseInt(prompt("Cuantas bolsas desea comprar?").toLowerCase());
    while (cantidad <= 0) {
      cantidad = parseInt(prompt("Ingreso una cantidad no valida. Ingresela nuevamente").toLowerCase());
    }

    precio = parseInt(prompt("Ingrese precio?").toLowerCase());
    while (isNaN(precio) || precio < 0) {
      precio = parseInt(prompt("Precio no valida. Ingreselo nuevamente").toLowerCase());
    }

    acumBolsas += cantidad;
    importe = precio * cantidad;
    importeBruto += importe;

    if (tipo == "arena") {
      acumuladorBA += cantidad;
    } else if (tipo == "cal") {
      acumuladorBCal += cantidad;
    } else {
      acumuladorCem += cantidad;
    }

    if (flag || precio > mayorPrecio) {
      mayorTipo = tipo;
      mayorPrecio = precio;
      flag = 0
    }

    seguir = prompt("Desea seguir ingresando? (s/n) :").toLowerCase();
  } while (seguir == "s");

  if (acumBolsas <= 10) {
    descuento = 0;
  } else if (acumBolsas > 10 && acumBolsas <= 30) {
    descuento = importeBruto * .15;
  } else {
    descuento = importeBruto * .25;
  }

  importeNeto = importeBruto - descuento;

  if (acumuladorBA > acumuladorBCal && acumuladorBA > acumuladorCem) {
    tipoMaxBolsas = "arena";
    cantMaxBolsas = acumuladorBA;
  } else if (acumuladorBCal >= acumuladorBA && acumuladorBCal > acumuladorCem) {
    tipoMaxBolsas = "cal";
    cantMaxBolsas = acumuladorBCal;
  } else {
    tipoMaxBolsas = "cemento";
    cantMaxBolsas = acumuladorCem;
  }

  document.write(`a) El importe total a pagar es ${importeBruto}<br>`);
  if (descuento > 0) {
    document.write(`b) El importe total a pagar con descuento es ${importeNeto}<br>`);
  }
  document.write(`c) Tipo con más cantidad de bolsas: ${tipoMaxBolsas} con ${cantMaxBolsas} bolsas<br>`);
  document.write(`d) Tipo más caro: ${mayorTipo} con ${mayorPrecio}`);

}
