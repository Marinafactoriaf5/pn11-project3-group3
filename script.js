document.addEventListener('DOMContentLoaded', function () {
    const fetchDataButton = document.querySelector('#enter');
    const urlInput = document.querySelector('.cajita');
    const responseData = document.querySelector('#responseData');
    const errorContainer = document.querySelector('#errorContainer');
    fetchDataButton.addEventListener('click', async () => {
        const apiUrl = urlInput.value;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            responseData.textContent = JSON.stringify(data, null, 2);
            errorContainer.style.display = 'none'; 
        } catch (error) {
            responseData.textContent = '';
            errorContainer.innerHTML = ''; 
            const errorMessage = document.createElement('p');
            errorMessage.textContent = '"Oops! I think I just hit the purr instead of the enter key. Meow-error!"';
            const errorGif = document.createElement('img');
            errorGif.src = 'Imagenes/error404cat.gif';
            errorContainer.appendChild(errorMessage);
            errorContainer.appendChild(errorGif); 
            errorContainer.style.display = 'block'; 
        }
    });
});



