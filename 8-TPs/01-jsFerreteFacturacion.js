/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumar;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumar = precio1 + precio2 + precio3;
    
    alert(`El resutado es ${sumar}`);

}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (precio1 + precio2 + precio3) / 3

    alert(`El promedio es ${promedio}`);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumaConIva;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumaConIva = (precio1 + precio2 + precio3) * 1.21;

    alert(`El precio final es ${sumaConIva}`)

}