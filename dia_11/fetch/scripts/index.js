let dataJson;

fetch('json_docs/personas.json')
.then(resp => resp.json())        // Cuando se resuelve la promesa, envía la respuesta a la variable "resp"
.then( (salida) => {            // Cuando se reuelve la promesa de la instrucción "resp.json", manda la
    dataJson = salida;          // respuesta a la variable "salida"

    elementoNombre = document.querySelector('#nombre');
    elementoNombre.textContent = dataJson.nombre;
});

fetch('json_docs/perconas.json')
    .then(resp => resp.json())        // Cuando se resuelve la promesa, envía la respuesta a la variable "resp"
    .then( (salida) => {            // Cuando se reuelve la promesa de la instrucción "resp.json", manda la
        dataJson = salida;          // respuesta a la variable "salida"

        elementoEdad = document.querySelector('#edad');
        elementoEdad.textContent = dataJson.edad;
    })
    .catch(function(error){
        alert("Este es un test de 'catch': |||" + error);
    });

document.addEventListener('DOMContentLoaded', function() {
});