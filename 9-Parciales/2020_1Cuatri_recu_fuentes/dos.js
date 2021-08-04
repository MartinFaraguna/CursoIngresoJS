/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos
 estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura. DONE
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV. DONE
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra. DONE
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°. DONE
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario
*/


function mostrar() {
  let nombre;
  let edad;
  let genero; // “F”, “M”, “NB”.
  let vacuna;	// “SputnikV”, “AstraZeneca”, “Otra”.
  let temperatura;
  let seguir;

  let nombreMasTemp; //a
  let vacunaMasTemp; // a
  let mayorTemp; // a
  let flag = 1; // a

  let contadorFemSput = 0; // femenino Sputnik V //B
  let contadorNBVacuna = 0; // NB vacuna // C
  let contadorAstra38 = 0; //  personas que se aplicaron AstraZeneca .temperatura mayor a 38° // D

  let acumuladorEdadH = 0; // acumulador edad hombre // E
  let contadorHSputnik = 0; // contador de hombres que se aplicaron Spitnik // E
  let promedioH; // promedio de hombres que se aplicaron sputnik V // E

  let porcentajeAstra; // porcentaje AstraZeneca // F
  let vacunasTotal = 0; // F

  let contadorAstra = 0; // f // G
  let contadorSputnik = 0; // G
  let contadorOtras = 0; // G
  let vacunaMax; // G

  //	h) Promedio de edad de las personas que se dieron cada vacuna
  let acumuladorEdadSputnik = 0; // h)
  let acumuladorEdadAstra = 0; // h)
  let acumuladorEdadOtras = 0; // h)
  let promedioS; // h)
  let promedioA; // h)
  let promedioO; // h)

  let porcentajeF;
  let porcentajeM;
  let porcentajeNB;

  let respuesta;

  //comienzo Bucle.
  do {

    vacunasTotal++;

    nombre = prompt("Ingrese su nombre");
    while (nombre.length == 0) {
      nombre = prompt("Error. Ingrese su nombre");
    }

    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error. Ingrese una edad valida"));
    }

    genero = prompt("Ingrese su genero. (“F”, “M”, “NB”.)").toLowerCase();
    while (genero != "f" && genero != "m" && genero != "nb") {
      genero = prompt("Error. Ingrese un sexo valido").toLowerCase();
    }

    vacuna = prompt("Ingrese la vacuna. (“SputnikV”, “AstraZeneca”, “Otra”.)").toLowerCase();
    while (vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra") {
      vacuna = prompt("Error. Ingrese una vacuna existente.(“SputnikV”, “AstraZeneca”, “Otra”.)").toLowerCase();
    }

    temperatura = parseInt(prompt("Ingrese su temperatura durante la primera noche."));
    while (isNaN(temperatura)) {
      temperatura = parseInt(prompt("Error. Ingrese una temperatura valida"));
    }

    //A
    if (flag || temperatura > mayorTemp) {
      mayorTemp = temperatura;
      nombreMasTemp = nombre;
      vacunaMasTemp = vacuna;
      flag = 0;
    }

    if (vacuna == "sputnikv") {

      contadorSputnik++;

      if (genero == "f") {
        contadorFemSput++;
      } else if (genero == "m" && temperatura <= 37) {

        contadorHSputnik++;
        acumuladorEdadH += edad;
      }

    } else if (vacuna == "astrazeneca") {
      contadorAstra++;
      if (genero == "nb") {
        contadorNBVacuna++;
      }
      //d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°. DONE

      if (temperatura > 38) {
        contadorAstra38++;
      }

      //f) Porcentaje de personas que se aplicaron Aztrazeneca

    } else {
      contadorOtras++;

    }

    seguir = prompt("Desea seguir ingresando? s/n").toLowerCase();
    //Fin Ingreso de datos.
  } while (seguir == "s")

  if (contadorAstra > contadorHSputnik && contadorAstra > contadorOtras){
    vacunaMax = contadorAstra;
  } else if (contadorHSputnik >= contadorAstra && contadorHSputnik > contadorOtras){
    vacunaMax = contadorSputnik;
  } else {
    vacunaMax = contadorOtras;
  }


  promedioH = acumuladorEdadH / contadorHSputnik;
  porcentajeAstra = contadorAstra * 100 / vacunasTotal;
  console.log(porcentajeAstra);

}
