function invierteCadena(cad){
    let reversa = "";
    for (let i = cad.length - 1; i >= 0; i--){
        reversa += cad[i];
    }       
    return reversa;
}

let cadena2=prompt("dime una cadena");
let resultado = invierteCadena(cadena2);
document.write(resultado);


function separarPalabas(cad) { 
    let arrayPalabras;
    arrayPalabras = cad.split(" ");
    for(let i = 0; i < arrayPalabras.length; i++){
        reversa1 += (invierteCadena(cad[i]));
    }
    return reversa1;
}

let cadena3=prompt("dime una cadena");
let resultado2 = separarPalabas(cadena3);
document.write(resultado2);

