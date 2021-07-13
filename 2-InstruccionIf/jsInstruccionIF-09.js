function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let max = 10;
	let min = 1;
	let random;

	random = Math.floor(Math.random() * (max - min + 1) + min);
	alert(random);

}//FIN DE LA FUNCIÓN