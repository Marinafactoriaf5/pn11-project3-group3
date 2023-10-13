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
            errorMessage.textContent = '"Oops! I think I just hit the purr instead of the enter key. Meow-error!"';
            const errorGif = document.createElement('img');
            errorGif.src = 'Imagenes/error404cat.gif'; // Reemplaza con la ruta de tu archivo GIF
            errorContainer.appendChild(errorMessage);
            errorContainer.appendChild(errorGif); // Agregar el GIF al contenedor de error
            errorContainer.style.display = 'block'; // Mostrar el contenedor de error
        }
    });
});


