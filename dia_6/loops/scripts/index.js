let elementoRepaso;
let elementoNumero;
let elementoBoton;

document.addEventListener("DOMContentLoaded", function(){
    elementoRepaso = document.getElementById("repaso");
    elementoNumero = document.getElementById("numero");
    elementoBoton = document.getElementById("botonMostrarTabla");

    elementoNumero.addEventListener("keyup", function() {
        document.getElementById("numeroBoton").textContent = elementoNumero.value;
        elementoBoton.style.display = "block";
    });
});

function iniciarTest() {
    elementoRepaso.textContent = elementoNumero.value + ' x ' + Math.round(Math.random()*10);
    let elementoTabla = document.getElementById("tabla");
    while (elementoTabla.firstChild) {
        elementoTabla.removeChild(elementoTabla.firstChild);
    }
}

function mostrarTabla() {
    let elementoTabla = document.getElementById("tabla");
    while (elementoTabla.firstChild) {
        elementoTabla.removeChild(elementoTabla.firstChild);
    }
    for(let i=0; i<=10; i++) {
        let resultado = i * elementoNumero.value;
        let textoResultado = elementoNumero.value + '*' + i + ' = ' + resultado;
        let itemListaTabla = document.createElement('li');
        itemListaTabla.innerText = textoResultado;
        elementoTabla.appendChild(itemListaTabla);
    }
}
