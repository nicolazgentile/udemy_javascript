let cont = 1;
let perros = [];
let elementoListaPichichos, elementoOption;

function crearPerro() {
    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    let edad = document.getElementById("edad").value;
    perros[cont] = new Perro(nombre, raza, edad);

    elementoListaPichichos = document.getElementById("listaPichichos");
    elementoOption = document.createElement("option");
    elementoOption.textContent = nombre;
    elementoOption.value = perros[cont];
    cont++;
}

function Perro(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.aullar = function() {
        let mensaje = "Auuuuuuuuuu!!! (soy el perro " + this.nombre + " y tengo " + this.edad + " años)";
        console.log(mensaje);
        alert(mensaje);
    }
}

function aullar() {
    let perro = elementoOption[elementoListaPichichos.selectedItem].text;
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