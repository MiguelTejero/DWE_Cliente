let nombres = ["jose","rosa","paco"];

function pintaNombres(n){
    console.log(n);
}

/*OPCION A
for(n of nombres){
    console.log(n);
}
*/

//OPCION B
nombres.forEach(pintaNombres);





// esto es una funcion anonima, es lo mismo que declarar 
// la funcion decir lo que hace y luego llamarla.
nombres.forEach( n => console.log(n));
