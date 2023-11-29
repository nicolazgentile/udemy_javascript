let audio = document.querySelector('#audio');
let listaCanciones = document.querySelector('#listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(event) {
    /*let cancionElegida = listaCanciones.value;*/
    audio.src = event.target.value;
    audio.play();

    let miEvento = new CustomEvent('saltoCancion');
    audio.dispatchEvent(miEvento);
}

audio.addEventListener('saltoCancion', mostrarCancion);

function mostrarCancion(event) {
    console.log("La canción actual es xxx".replace('xxx', listaCanciones.value));
}