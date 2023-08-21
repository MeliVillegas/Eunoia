document.addEventListener('DOMContentLoaded', function () {
    const horaActual = new Date().getHours();
    let mensajeBienvenida;

    if (horaActual >= 0 && horaActual < 12) {
        mensajeBienvenida = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
        mensajeBienvenida = '¡Buenas tardes!';
    } else {
        mensajeBienvenida = '¡Buenas noches!';
    }

    const imagenUrl = './img/calma.png';
    const mensajeBienvenidaTexto = 'Bienvenid@ a Eunoia! Espero que disfrutes del recorrido.';

    Swal.fire({
        html: `<img src="${imagenUrl}" alt="Icono personalizado" width="100" height="100"><h1>${mensajeBienvenida}</h1><p>${mensajeBienvenidaTexto}</p>`,
        confirmButtonText: 'Gracias'
    });
});


