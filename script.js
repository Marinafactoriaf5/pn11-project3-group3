document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.querySelector('#enter');
    const urlInput = document.querySelector('.cajita');
    const responseData = document.querySelector('#responseData');

    fetchDataButton.addEventListener('click', async () => {
        const apiUrl = urlInput.value;
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            responseData.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            responseData.textContent = 'Error al obtener los datos. Asegúrate de que la URL de la API sea válida.';
        }
    });
});