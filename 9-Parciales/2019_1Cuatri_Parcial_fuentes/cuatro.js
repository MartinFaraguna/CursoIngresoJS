function mostrar() {

    let num1,
    num2,
    resta,
    suma;

    num1 = parseInt(prompt("numero 1"));
    num2 = parseInt(prompt("numero 2"));

    if (num1 == num2){
        alert(num1 + "" +  num2)
    } else if (num1 > num2){
        resta = num1 - num2;
        alert(`Se resto y dio ${resta}`)
    } else {
        suma = num1 + num2;
        alert(`Se sumo y dio ${suma}`)
    }

    if (resta > 10){
        alert("la resta es " + resta + " y superó el 10")
    }

}
