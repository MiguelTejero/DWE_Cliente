let numero=parseInt(prompt("dime cuantos hermanos tienes"));
let cantidad=parseInt(prompt("dime una cantidad aleatoria"));

if (numero > 3){
    document.write(cantidad - (cantidad * 0.15));
}
else if (numero < 3){
    document.write(cantidad - (cantidad * 0.05));
}
else if(numero == 3){
    document.write(cantidad);
}