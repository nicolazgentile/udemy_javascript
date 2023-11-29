let socket = new WebSocket('https://nicolazgentile.github.io/udemy_javascript/');
/*let socket = new WebSocket('ws://localhost:8080');*/
let elementoMensajeIngresado = document.getElementById('mensajeIngresado');
let elementoBotonEnviarMens = document.querySelector('#enviarMensaje');

function mostrarMensajes(contenido) {
    let elementoChatMensajes = document.querySelector('#chatMensajes');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    elementoChatMensajes.appendChild(elementoMensaje);
}

elementoBotonEnviarMens.addEventListener('click', function() {
    let msg = elementoMensajeIngresado.value;
    mostrarMensajes(msg);
    socket.send(msg);
});

socket.onmessage = function(event) {
    let mensaje = event.data;
    mostrarMensajes(mensaje);
}