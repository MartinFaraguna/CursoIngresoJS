/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let ladosConAlambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    ladosConAlambre = (largo * 2 + ancho * 2) * 3;

    alert(`Cantidad de alambre a comprar: ${ladosConAlambre}`);
}
function Circulo() {
    let pi;
    let radio;
    let alambre;

    pi = Math.PI;
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    alambre = (2 * pi * radio) *3;

    alert(`Cantidad de alambre a comprar: ${calculo}`)
}
function Materiales() {
    let largo;
    let ancho;
    let largoxancho;
    let cemento;
    let cal;


    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    largoxancho = largo * ancho;
    cemento = 2 * largoxancho;
    cal = 3 * largoxancho;

    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`)

}