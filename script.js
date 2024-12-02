mapboxgl.accessToken = 'TU_MAPBOX_ACCESS_TOKEN';

function showMap(mapId) {
    const mapContainer = document.getElementById(mapId);
    mapContainer.style.display = 'block';

    const map = new mapboxgl.Map({
        container: mapId,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-70, -33], // Cambia según la región de interés
        zoom: 10
    });

    map.on('load', () => {
        console.log(`Mapa ${mapId} cargado.`);
    });
}



// Habilitar el despliegue del menú en dispositivos táctiles
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Alternar la visibilidad al hacer clic
    dropdown.addEventListener('click', function () {
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });

    // Ocultar el menú si se hace clic fuera
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
