function evaluarCompra() {
    let elementoRespuesta = document.getElementById("desicion");
    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    if(precio < 5){
        elementoRespuesta.textContent = "Comprar la merca.";
    }
    else{
        elementoRespuesta.textContent = "No compres ni bosta.";
    }
}