/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() {

    let precio;
    let cantidad;
    let marca;
    let precioFinal;
    let importeTotal;
    let IIBB;
    let impuesto;

    precio = 35;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    importeTotal = cantidad * 35
    IIBB = 10 / 100


    switch (cantidad) {
        //Caso B
        case 5:
            if (marca == "ArgentinaLuz") {
                precioFinal = importeTotal * .6;
            } else {
                precioFinal = importeTotal * .7;
            }
            break;
        //Caso C
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                precioFinal = importeTotal * .75;
            } else {
                precioFinal = importeTotal * .8;
            }
            break;
        //Caso D
        case 3:
            if (marca == "ArgentinaLuz") {
                precioFinal = importeTotal * .85;
            } else if (marca == "FelipeLamparas") {
                precioFinal = importeTotal * .9;
            } else {
                precioFinal = importeTotal * .95;
            }
            break;
        //Caso A
        default:
            precioFinal = importeTotal * 0.5;
    }

    if (precioFinal > 120){
        impuesto = precioFinal * IIBB;
        precioFinal += impuesto;
        alert(`IIBB Usted pago ${impuesto}`);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
