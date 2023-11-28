let numeroSucursales, sucursales, elementoP, elementoLabel, elementoInput;

function crearTiendas() {
    let cantSucursales = prompt("Número de sucursales a habilitar:", 4);
    let nombreComercio = prompt("Nombre de la cadena de comercios:", 'Tienda');
    numeroSucursales = cantSucursales;
    for(let i=1; i<=numeroSucursales; i++) {
        crearTienda(nombreComercio, i);
    }
}

function crearTienda(nombreTienda, i) {
    sucursales = document.getElementById("sucursales");
    elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'number');
    elementoLabel = document.createElement('label');
    elementoLabel.innerText = "Recaudación de " + nombreTienda + "_" + i;
    elementoP = document.createElement('p');
    elementoLabel.appendChild(elementoInput);
    elementoP.appendChild(elementoLabel);
    sucursales.appendChild(elementoP);
}

function calcularTotales() {
    let recaudacion = obtenerIngresos();
    let totalVentas = sumarMontos(recaudacion);
    let menorVenta = obtenerMenor(recaudacion);
    let mayorVenta = obtenerMayor(recaudacion);
    let textoResultado = "Total: " + totalVentas + 
                        " | Menor: " + menorVenta +
                        " | Mayor: " + mayorVenta;
    let elementoResultados = document.getElementById("resultados");
    elementoResultados.textContent = textoResultado;
    resaltarResultados(menorVenta, mayorVenta);
}

function obtenerIngresos() {
    let recaudacion = [];
    for(let i=0; i<numeroSucursales; i++) {
        /* Otra opción (MUCHO más fácil), es asignarles IDs a los elementos input */
        recaudacion.push(+sucursales.childNodes[i].childNodes[0].children[0].value);
    }
    /* El signo "+" convierte a numeros */
    return recaudacion;
}

function sumarMontos(miArray) {
    let total = 0;
    miArray.forEach(function(monto){total += monto});
    return total;
}

function obtenerMenor(miArray) {
    let menor = miArray[0];
    miArray.forEach(function(monto){if(menor > monto) menor = monto;});
    return menor;
}

function obtenerMayor(miArray) {
    let mayor = 0;
    miArray.forEach(function(monto){if(mayor < monto) mayor = monto;});
    return mayor;
}

function resaltarResultados(menorVenta, mayorVenta) {
    for(let i=0; i<numeroSucursales; i++) {
        /* Otra opción (MUCHO más fácil), es asignarles IDs a los elementos input */
        let valor = +sucursales.childNodes[i].childNodes[0].children[0].value;
        if(valor == menorVenta) sucursales.childNodes[i].childNodes[0].children[0].setAttribute("style","background-color:pink");
        else if(valor == mayorVenta) sucursales.childNodes[i].childNodes[0].children[0].setAttribute("style","background-color:lightgreen");
        else  sucursales.childNodes[i].childNodes[0].children[0].setAttribute("style","background-color:white");
    }
}