var mivariable = 0; /* Se puede usar var / const / let , dependiendo del tipo de variable */

document.write("El contenido de mi variable es" + mivariable);

/*------------------------------------------------*/

/*3 Modos de pedir un valor*/
/*  let valor0= prompt("dime un numero");   */
/*  let valor1= parseInt(200);   */

let valor=parseInt(prompt("dime un numero"));
valor = valor + 1;


document.write(valor);
/* se puede de las dos maneras*/
console.log(valor);