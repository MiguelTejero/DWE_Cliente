//funcion de contador, cuenta regresiva

var numero = 0;
function miFuncion(){
    document.write(numero);
    numero++;
}

setInterval(miFuncion,1000);

//


//funcion preguntar permitir tu ubicación

function muestraPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition(muestraPosicion);
