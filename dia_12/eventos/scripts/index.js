let elementoInput1 = document.querySelector('#miInput1');
let elementoDiv1 = document.querySelector('#div1');
let elementoInput2 = document.querySelector('#miInput2');
let elementoDiv2 = document.querySelector('#div2');
let elementoBoton3 = document.querySelector('#boton3');

elementoInput1.addEventListener('keydown', patterControl);
elementoDiv2.addEventListener('keydown', patterControl);

elementoInput1.addEventListener('keyup', keyReg);
elementoDiv2.addEventListener('keyup', keyReg);

function patterControl(event){
    if(event.target.id == "miInput1" && (event.keyCode >= 48 && event.keyCode <= 57)) {
        event.preventDefault();
    }
    else if(event.target.id == "miInput2" && (event.keyCode < 46 || event.keyCode > 57)) {
        event.preventDefault();
    }
}

function keyReg(event){
    alert(event.key);
    alert(event.target.value);
    /*alert(event.target);
    alert(event.currentTarget);*/
}

elementoBoton3.addEventListener('mouseover', toogleMenu);
elementoBoton3.addEventListener('mouseout', toogleMenu);

function toogleMenu(event) {
    displayState = document.querySelector("#menuList");
    if(event.type == 'mouseover') {
        displayState.style.display = 'block';
    }
    else if(event.type == 'mouseout') {
        displayState.style.display = 'none';
    }
}

document.addEventListener('mousemove', deteccionLimite);

function deteccionLimite(event) {
    if(event.clientX > 400) { alert("Limite X sobrepasado"); }
    if(event.clientY > 500) { alert("Limite Y sobrepasado"); }
}