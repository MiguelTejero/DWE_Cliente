var platform = new H.service.Platform({
    'apikey': '-1xqjgwXCiWBvsTZ51nb1I1tfdDhC01uwMXQg7A-47k'
  });


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



  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) the map
  var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 10,
      center: { lng: 13.4, lat: 52.51 }
    });