let elementoContenido;
let notasAleatorias;
let elementoPromedio;

document.addEventListener("DOMContentLoaded", function() {
    elementoContenido = document.getElementById("contenido");
});

function inventarNotas() {
    notasAleatorias = [];
    for(let i=1; i<6; i++) {
        notasAleatorias.push(Math.round(Math.random()*10));
    }
}

function mostrarNotas() {
    limpiarElemento(elementoContenido);
    for(nota of notasAleatorias) {
        let elementoLista = document.createElement("ul");
        let elementoListaNotas = document.createElement("li");
        elementoLista.appendChild(elementoListaNotas);

        let textoListaNotas = "Nota: " + nota;
        elementoListaNotas.innerText = textoListaNotas;
        elementoContenido.appendChild(elementoListaNotas);
    }
}

function promedio() {
    total = 0;
    for(let i=0; i<notasAleatorias.length; i++) {
        total += notasAleatorias[i];
    }
    let textoPromedio = "La media aritmética es: " + total/notasAleatorias.length;
    elementoPromedio = document.createElement("h3");
    elementoPromedio.innerText = textoPromedio;
    elementoContenido.appendChild(elementoPromedio);
}

function notaMayor() {
    let mayorNota = 0;
    let i = 0;
    while(i < notasAleatorias.length) {
        if(notasAleatorias[i] > mayorNota) mayorNota = notasAleatorias[i];
        i++;
    }
    let elementoMayorNota = document.createElement("h1");
    let textoMayorNota = "Capo, te sacaste un " + mayorNota + "!!!";
    elementoMayorNota.innerText = textoMayorNota;
    elementoContenido.appendChild(elementoMayorNota);
}

function aplazos() {
    let i = 0;
    let aplazos = 0;
    do {
        if(notasAleatorias[i] < 7) aplazos++;
        i++;
    }while(i < notasAleatorias.length);

    let elementoAplazo = document.createElement("h5");
    let textoAplazo = "Te llevaste " + aplazos + " materias, :( ...a estudiar macho.";
    elementoAplazo.innerText = textoAplazo;
    elementoContenido.appendChild(elementoAplazo);
}

function limpiarElemento(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}