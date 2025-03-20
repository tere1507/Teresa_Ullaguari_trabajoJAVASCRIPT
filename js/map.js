//Codigo Javascript para Mapa
// function cargarmapa() {
//     // Coordenadas del punto
//     var lat = 41.129220338983;
//     var lng = -3.23365432098762;

//     // Crea el mapa Leaflet
//     var map = L.map('mapa').setView([lat, lng], 6); // Nivel de zoom 6

//     // Agrega la capa de mapa de OpenStreetMap
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Agrega un marcador (opcional)
//     L.marker([lat, lng]).addTo(map)
//         .bindPopup('¡Estamos aquí!') // Popup opcional
//         .openPopup(); // Abre el popup automáticamente
// }

// cargarmapa(); // Llama a la función para cargar el mapa

//cordenadas del negocio.
const latNegocio = 40.129220338983;
const lngNegocio = -3.23365432098762;

//Inicializamos el mapa.
const mapa = L.map('mapa').setView([latNegocio, lngNegocio], 15);//Inicializa el mapa Leaflet, estableciendo el centro y el nivel de zoom 15.

//capa de mapa OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {//Agrega la capa de mapa de OpenStreetMap al mapa
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'//Atribución para OpenStreetMap
}).addTo(mapa);

//marcador del negocio.
L.marker([latNegocio, lngNegocio]).addTo(mapa)//agrega un marcador en la ubicacion del negocio.
    .bindPopup('<strong>¡Estamos aquí!</strong>')//agrga un popup al marcador.
    .openPopup();//lo abre automaticamente.

//funcion para calcular la ruta.
function calcularRuta(latCliente, lngCliente) {
    L.Routing.control({//creamos un control de enrutamiento con Leaflet Routing Machine.
        waypoints: [//Define los puntos de inicio y fin de la ruta.
            L.latLng(latCliente, lngCliente),
            L.latLng(latNegocio, lngNegocio)
        ],
        routeWhileDragging: true,//Permite actualizar la ruta al arrastrar los puntos.
        showAlternatives: false,//Desactiva las rutas alternativas.
        addWaypoints: false//Desactiva la adición de puntos intermedios.
    }).addTo(mapa)//Agrega el control de enrutamiento al mapa.
}

//obtener la ubicacacion del cliente.
if ("geolocation" in navigator) {//Verifica si la geolocalización está disponible en el navegador.
    navigator.geolocation.getCurrentPosition(function (position) {//Obtiene la ubicación del cliente.
        const latCliente = position.coords.latitude;
        const lngCliente = position.coords.longitude;
        calcularRuta(latCliente, lngCliente);//Llama a la función para calcular la ruta.
    });
} else {
    alert("La geolocalización no está disponible en tu navegador.");
}







