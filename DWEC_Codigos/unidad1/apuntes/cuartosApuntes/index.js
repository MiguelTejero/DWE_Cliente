//Bucle for
let nombre = prompt("Dime tu nombre");

for (let i = 0; i < nombre.length;){
    document.write("<p>" + nombre[i] + "</p>")
}


//Bucle while

let nombre2 = prompt("Dime tu nombre");

while (nombre2 == "Jose"){
    document.write("Hola Jose");
}


// Bucle do while 
let nombre3 = prompt("Dime tu nombre");
do
{
    document.write("Hola Jose");
}while (nombre3 == "Jose");


//otro bucle for con una condicion
let a = prompt("Dime una letra");
for (let i = 0; i < a.length;){
    if (a[i] === "J"){
        break;
    }
    else{
        document.write("<p>" + a[i] + "</p>")
    }
}


//array
const arr = [3,5,7];

for(let i of arr){
    document.write(i + "<br>");
}


//otra opcion mejor
const arr1 = [3,5,7];

for(let i=0; i<arr1.length, i++){
    document.write(arr1[i]);
}

//objeto persona y bucle for con of
persona.nombre ="Jesus";
persona.apellido="Jimenez";

for(let miembro of persona){
    document.write("miembro");
}