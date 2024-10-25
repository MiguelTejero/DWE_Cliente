let numero=parseInt(prompt("dime un numero"));

if (numero > 100){
    descuento = numero - (numero * 0.15);
    document.write("El numero con el descuento aplicado es " + descuento);
}
