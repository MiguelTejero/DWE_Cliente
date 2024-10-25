let n1 = Math.random()*(1-0) + 0;
let n2 =Math.random()*(200-100) + 100;
let valor1=parseInt(prompt("dime un numero"));
let valor2=parseInt(prompt("dime un numero"));

let n3 = Math.random()*(valor2-valor1) + valor1;

document.write("Un numero aleatorio entre 0 y 1 es: " + n1 + "<br>");
document.write("Un numero aleatorio entre 100 y 200 es: " + n2 + "<br>");



document.write("Un numero aleatorio entre "+ valor1 + " y " + valor2 + " es " + n3)

