let numero1=parseInt(prompt("dime un numero"));
let numero2=parseInt(prompt("dime otro numero"));
let operacion=(prompt("dime una operación"));

switch(operacion){
    case "+":
    document.write(numero1 + numero2);
}
switch(operacion){
    case "-":
    document.write(numero1 - numero2);
}
switch(operacion){
    case "*":
    document.write(numero1 * numero2);
}
switch(operacion){
    case "/":
    document.write(numero1 / numero2);
}

