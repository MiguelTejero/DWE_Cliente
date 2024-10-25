let n = parseInt(prompt("Introduce un numero"));

if (/^\d+$/.test(numero)) {
    let suma = 0;
for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
}
document.write("la suma es" + suma);
}
else{
    document.write("Introduce un numero valido");

}