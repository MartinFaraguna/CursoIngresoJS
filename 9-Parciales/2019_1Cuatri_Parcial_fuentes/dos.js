function mostrar()
{
  let nombre1,
  nombre2,
  peso1,
  peso2,
  suma,
  promedio;

  nombre1 = prompt("Nombre del primero");
  peso1 = parseInt(prompt("Peso en KG"));
  nombre2 = prompt("Nombre del segundo");
  peso2 = parseInt(prompt("Peso en KG"));

  suma = peso1 + peso2;
  promedio = suma / 2;

  alert(`ustedes se llaman ${nombre1} y ${nombre2} pesan ${peso1}kg y ${peso2}kg, que sumados son ${suma}kg y el promedio de peso ${promedio}kg`)
}
