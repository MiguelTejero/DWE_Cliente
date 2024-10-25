let a = parseInt(prompt("Introduce el valor a"));
let b = parseInt(prompt("Introduce el valor b"));
let c = parseInt(prompt("Introduce el valor c"));

let resultado = ((-b + (Math.sqrt(((b*b) - (4 * a *c)))) / (2 * a)));
let resultado2 = ((-b - (Math.sqrt(((b*b) - (4 * a *c)))) / (2 * a)));

document.write("Las soluciones a la ecuacion de segundo grado son: " + "<br>" + resultado + "<br>" + resultado2);