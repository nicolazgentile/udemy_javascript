let elementoGeneroSelect;
let generoOptions;
let elementoPeliculas;
let pelis;
let elementoEdad;
let aptoEdades;

document.addEventListener("DOMContentLoaded", function () {
    elementoGeneroSelect = document.getElementById("genero");
    generoOptions = elementoGeneroSelect.options;
    elementoPeliculas = document.getElementById("listado_peliculas");
    elementoEdad = document.getElementById("edad");
});

function mostrarListado() {
    let generoSelected = generoOptions[elementoGeneroSelect.selectedIndex].text;
    pelis = document.getElementsByClassName("pelis");
    for(let peli of pelis){
        peli.style.display = "none";
    }

    if (elementoEdad.value == 0) { aptoEdades = '';}
    else if (elementoEdad.value <= 12) { aptoEdades = 'INF';}
    else if (elementoEdad.value >= 18) { aptoEdades = 'M18';}
    else if (elementoEdad.value > 12 & elementoEdad.value < 18) { aptoEdades = 'ATP';}

    switch (generoSelected) {
        case 'Accion':
            pelis = document.getElementsByClassName("Accion " + aptoEdades);
            break;
        case 'Drama':
            pelis = document.getElementsByClassName("Drama " + aptoEdades);
            break;
        case 'Comedia':
            pelis = document.getElementsByClassName("Comedia " + aptoEdades);
            break;
        default:
            pelis = document.getElementsByClassName("pelis " + aptoEdades);
            break;
    }

    for(let peli of pelis){
        peli.style.display = "block";
    }
}