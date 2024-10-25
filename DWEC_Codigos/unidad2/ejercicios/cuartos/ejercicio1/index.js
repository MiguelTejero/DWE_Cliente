function funcionLlamaGeolocalizacion(posicion){
    console.log("Salta geolocalización correctamente");
    console.log("Estás en" + posicion.coords.latitude + " , " + posicion.coords.longitude)
}
function funcionParaError(error){
    console.log("Se ha producido un error")
    console.log("Eror numero " + error.code)
    console.log(error.message)
}

if(navigator.geolocation){
    //soporta geolocalizacion
    document.write("Perfecto, podemos trabajar la geolocalización");
    navigator.geolocation.getCurrentPosition(funcionLlamaGeolocalizacion);
}
else{
    // no soporta geolocalizacion
    document.write("Debes usar un ordenador más moderno");
}

