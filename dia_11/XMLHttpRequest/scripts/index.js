let datosJson;
let xhr = new XMLHttpRequest();

xhr.open('GET', "json_docs/personas.json", true);
xhr.responseType = 'json';
xhr.onload = function() {
    if(xhr.status === 200) {
        datosJson = xhr.response;
        let elementoTexto = document.getElementById("nombre");
        elementoTexto.textContent = datosJson.nombre;
    } else {
        alert(xhr.statusText);
    }
}
xhr.send();

document.addEventListener("DOMContentLoaded", function(){
});