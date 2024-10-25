
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





