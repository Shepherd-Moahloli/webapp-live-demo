// filepath: /webapp-live-demo/webapp-live-demo/src/main.js
document.addEventListener('DOMContentLoaded', () => {
    const addColorButton = document.querySelector('.add-color-button');
    const colorList = document.querySelector('.color-list');

    addColorButton.addEventListener('click', () => {
        const color = prompt('Enter a color (e.g., #ff0000):');
        if (color) {
            const listItem = document.createElement('li');
            listItem.textContent = color;
            listItem.style.color = color;
            colorList.appendChild(listItem);
        }
    });

    window.addEventListener('message', (event) => {
        const message = event.data;
        switch (message.type) {
            case 'addColor':
                // Logic to handle adding a color can be implemented here
                break;
            case 'clearColors':
                colorList.innerHTML = '';
                break;
        }
    });
});