/*let datosJson;
let xhr = new XMLHttpRequest();

xhr.open('GET', 'json_docs/cuentasPersonas.json');
xhr.responseType('json');
xhr.onload = function() {
    if(xhr.status === 200) {
        datosJson = xhr.response;
    }
    else {
        alert(xhr.statusText);
    }
}
xhr.send();*/

let datosJson;

fetch('json_docs/cuentasPersonas.json')
.then( respuesta => respuesta.json())
.then( salida => {
    datosJson = salida;

    let elementoNombre = document.querySelector('#nombre');
    let elementoNroCuenta = document.querySelector('#nroCuenta');
    let elementoSaldo = document.querySelector('#saldo');
    let elementoCBU = document.querySelector('#cbu');

    elementoNombre.textContent = datosJson.nombre;
    elementoNroCuenta.textContent = datosJson.nro_cuenta;
    for(let tipoCambio in datosJson.saldo) {
        let itemTipoCambio = document.createElement('li');
        itemTipoCambio.innerText = datosJson.saldo[tipoCambio] + " [" + tipoCambio + "]";
        document.querySelector('#saldo').appendChild(itemTipoCambio);
    }
    elementoCBU.textContent = datosJson.CBU;
})
.catch(function(error) {
    alert(error);
})