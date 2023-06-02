// Variables globales de ejemplo
var familyData = [
  {
    numero: 1,
    familia: 'Gonzales',
    domicilio: 'Gral Paz 1365',
    telefono: '11-1111-1111'
  },
  {
    numero: 2,
    familia: 'Souza',
    domicilio: 'Bacacay 340',
    telefono: '11-2222-2222'
  },
  {
    numero: 3,
    familia: 'Fabricio',
    domicilio: 'Beiro 4570',
    telefono: '11-3333-3333'
  }
];
var currentPosition = { latitude: 0, longitude: 0 };
var currentDeliveryIndex = 0;

// Función para inicializar el mapa
function initMap() {
  var mapOptions = {
    center: { lat: currentPosition.latitude, lng: currentPosition.longitude },
    zoom: 12
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  // Colocar marcadores en el mapa para las direcciones de entrega
  for (var i = 0; i < familyData.length; i++) {
    var marker = new google.maps.Marker({
      position: { lat: 0, lng: 0 },
      map: map,
      label: familyData[i].numero.toString()
    });
  }
}

// Función para obtener la ubicación actual del usuario
function getCurrentLocation() {
  // Comprobar si el navegador admite la geolocalización
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      currentPosition.latitude = position.coords.latitude;
      currentPosition.longitude = position.coords.longitude;
      
      // Actualizar el mapa con la ubicación actual
      initMap();
    });
  }
}

// Función para mostrar la próxima entrega en el panel de información
function showNextDelivery() {
  var delivery = familyData[currentDeliveryIndex];
  var familyNameElement = document.getElementById('family-name');
  var addressElement = document.getElementById('address');
  
  familyNameElement.textContent = delivery.familia;
  addressElement.textContent = delivery.domicilio;
}

// Función para marcar una entrega como "entregada"
function markDelivered() {
  // Realizar acciones necesarias para marcar la entrega como "entregada"
  console.log('Entregado');
  
  // Pasar a la siguiente entrega
  currentDeliveryIndex++;
  showNextDelivery();
}

// Función para marcar una entrega como "no entregada"
function markNotDelivered() {
  // Realizar acciones necesarias para marcar la entrega como "no entregada"
  console.log('No Entregado');
  
  // Pasar a la siguiente entrega
  currentDeliveryIndex++;
  showNextDelivery();
}

// Event listeners para los botones de "entregado" y "no entregado"
document.getElementById('delivered-btn').addEventListener('click', markDelivered);
document.getElementById('not-delivered-btn').addEventListener('click', markNotDelivered);

// Llamar a las funciones necesarias para iniciar la aplicación
getCurrentLocation();
showNextDelivery();
