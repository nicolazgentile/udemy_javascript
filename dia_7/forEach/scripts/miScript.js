function obtenerIngresos(tienda_id) {
    /* El signo "+" convierte a numeros */
    return +document.getElementById(tienda_id).value;
}

function calcularTotales() {
    let montosTiendas = [];
    montosTiendas[0] = obtenerIngresos('tienda1');
    montosTiendas[1] = obtenerIngresos('tienda2');
    montosTiendas[2] = obtenerIngresos('tienda3');
    montosTiendas[3] = obtenerIngresos('tienda4');
    let totalVentas = sumarMontos(montosTiendas);
    let menorVenta = obtenerMenor(montosTiendas);
    let mayorVenta = obtenerMayor(montosTiendas);
    let textoResultado = "Total: " + totalVentas + 
                        " | Menor: " + menorVenta +
                        " | Mayor: " + mayorVenta;
    let elementoResultados = document.getElementById("resultados");
    elementoResultados.textContent = textoResultado;
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