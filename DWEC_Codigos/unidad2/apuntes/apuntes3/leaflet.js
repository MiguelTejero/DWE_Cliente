

function funcionLlamaGeolocalizacion(posicion){
    console.log("Salta geolocalización correctamente");
    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);
    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 40,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Estás en" + posicion.coords.latitude + " , " + posicion.coords.longitude)
}

navigator.geolocation.getCurrentPosition(funcionLlamaGeolocalizacion);


