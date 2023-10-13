/*document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.querySelector('#enter');
    const urlInput = document.querySelector('.cajita');
    const responseData = document.querySelector('#responseData');
    fetchDataButton.addEventListener('click', async () => {
        const apiUrl = urlInput.value;
        const errorImage = document.querySelector("#errorImage");
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            responseData.textContent = JSON.stringify(data, null, 2);
            errorImage.style.display = "none"; // Oculta la imagen si se carga correctamente
        } catch (error) {
            responseData.textContent = 'Error al obtener los datos. Asegúrate de que la URL de la API sea válida.';
            errorImage.style.display = "block";
        }
    });
}); */



document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.querySelector('#enter');
    const urlInput = document.querySelector('.cajita');
    const responseData = document.querySelector('#responseData');
    const errorContainer = document.querySelector('#errorContainer'); // Nuevo contenedor para el mensaje de error
    fetchDataButton.addEventListener('click', async () => {
        const apiUrl = urlInput.value;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            responseData.textContent = JSON.stringify(data, null, 2);
            errorContainer.style.display = 'none'; // Ocultar el contenedor de error si hay éxito
        } catch (error) {
            responseData.textContent = ''; // Limpiar el contenido anterior
            errorContainer.innerHTML = ''; // Limpiar cualquier contenido previo en el contenedor de error
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Error al obtener los datos. Asegúrate de que la URL de la API sea válida.';
            const errorGif = document.createElement('img');
            errorGif.src = 'Imagenes/error404.gif'; // Reemplaza con la ruta de tu archivo GIF
            errorContainer.appendChild(errorMessage);
            errorContainer.appendChild(errorGif); // Agregar el GIF al contenedor de error
            errorContainer.style.display = 'block'; // Mostrar el contenedor de error
        }
    });
});