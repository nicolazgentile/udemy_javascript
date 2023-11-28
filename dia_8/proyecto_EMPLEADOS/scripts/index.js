let legajo = 0;
let array_emp = [];

function Empleado(nombre, apellido, nacimiento, cargo) {
    legajo += 1;
    this.legajo = legajo,
    this.nombre = nombre,
    this.apellido = apellido,
    this.nacimiento = nacimiento,
    this.cargo = cargo
}

function registrar_empleado() {
    nombre = document.querySelector('#nombre').value;
    apellido = document.querySelector('#apellido').value;
    nacimiento = document.querySelector('#nacimiento').value;
    cargo = document.querySelector('#cargo').value;
    array_emp.push(new Empleado(nombre, apellido, nacimiento, cargo));
    limpiar_formulario();
}

function listar_empleados() {
    mensaje = '';
    for(let empleado of array_emp){
        for(let atributo in empleado){
            mensaje += "|| " + atributo + ": " + empleado[atributo] + " ||";
        }
        mensaje += "\n";
    }
    alert(mensaje);
}

function limpiar_formulario() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido').value = '';
    document.querySelector('#nacimiento').value = '';
    document.querySelector('#cargo').value = '';
}