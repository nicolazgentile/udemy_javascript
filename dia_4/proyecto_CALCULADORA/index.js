let botones = document.getElementsByTagName('button');
let elementOperacion = document.getElementById("operacion");
let elementResultado = document.getElementById("resultado");
let listaOperaciones = [];
let flagResultado = false;
for(let boton of botones) {
    boton.addEventListener('click', function (){
        if(boton.textContent == 'C'){
            elementOperacion.value = '';
            elementResultado.value = '';
            listaOperaciones = [];
                flagResultado = 0;
        }
        else if(!flagResultado){
            if(boton.textContent == '=') {
                ejecutarOperaciones(listaOperaciones);
                listaOperaciones = [];
                flagResultado = 1;
            }
            else if(boton.textContent == '<'){
                elementOperacion.value = elementOperacion.value.slice(0,-1);
                listaOperaciones.pop();
                    flagResultado = 0;
            }
            else {
            escribirOperacion(boton.textContent);
            }
        }
    });
}
function escribirOperacion(valor) {
    listaOperaciones.push(valor);
    elementOperacion.value += valor;
}
function ejecutarOperaciones(listaOperaciones) {
    let resultado = '';
    for(let item of listaOperaciones) {
        resultado += item;
    }
    elementResultado.value = eval(resultado).toFixed(2);
}