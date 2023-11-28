let perro = {
    nombre: "Kyle",
    raza: "Akita Inu",
    edad: 13,
    aullar() {
        console.log("Auuuuuuuuuu!!!");
    }
}

function aullar() {
    perro.aullar();
}


function nuevoElemento(elemento, id, colorTexto, colorFondo) {
    let elemento1 = new htmlBasicCreator;
}

let htmlBasicCreator = {
    elemento: '',
    id: '',
    textoValor: '',
    colorTexto: '',
    colorFondo: '',
    idHijo: '',
    crear() {
        let nuevoElemento = document.createElement(elemento);
        nuevoElemento.setAttribute("id", id);
        if(colorTexto != '') nuevoElemento.setAttribute("color", colorTexto);
        if(colorFondo != '') nuevoElemento.setAttribute("backgroundcolor", colorFondo);
        if(idHijo != '') nuevoElemento.appendChild(idHijo);
        if(textoValor != '' && nuevoElemento.hasAttribute("innerText")) nuevoElemento.innerText(texto);
        if(textoValor != '' && nuevoElemento.hasAttribute("value")) nuevoElemento.innerText(texto);
    }
}