for(i = 0; i >= 6000; i++)
function lanzamiento(){
    var array=[1,2,3,4,5,6];
    var resultado = array[Math.floor(Math.random() * array.length)];
    document.getElementById('resultado').innerText = "Resultado: " + resultado;

}

