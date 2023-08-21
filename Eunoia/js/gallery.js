// Obtén todas las imágenes en la galería
const imageCards = document.querySelectorAll('.image-card');

// Agrega un evento de clic a cada imagen
imageCards.forEach(imageCard => {
    imageCard.addEventListener('click', () => {
        // Crea un elemento modal para la ampliación
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Crea la imagen ampliada
        const enlargedImage = document.createElement('img');
        enlargedImage.src = imageCard.querySelector('img').src;
        enlargedImage.alt = imageCard.querySelector('img').alt;

        // Agrega la imagen ampliada al modal
        modal.appendChild(enlargedImage);

        // Agrega el modal a la página
        document.body.appendChild(modal);

        // Cierra el modal cuando se haga clic en él
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
