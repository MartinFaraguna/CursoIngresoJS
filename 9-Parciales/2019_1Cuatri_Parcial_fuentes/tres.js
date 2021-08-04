function mostrar()
{
    let precio,
    porcentaje,
    calculo;
    

    precio = parseInt(prompt("Ingrese el precio"));
    porcentaje = parseInt(prompt("Ingrese porcentaje de descuento"));
    
    calculo = porcentaje / 100 * precio;

    document.getElementById("elPrecioFinal").value = calculo;
}
