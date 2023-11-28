let arrayAutos = [];
let listadoVehicular;

function Auto(marca, modelo, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.titular = titular;
}

arrayAutos.push(new Auto("Chevy", "Cruise", 2006, "Polytopia"));
arrayAutos.push(new Auto("Fiat", "Peperina", 2026, "La pochia"));
arrayAutos.push(new Auto("Peuyo", "ameo", 2006, "Elbraian"));

Auto.prototype.venderAutomovil = function(nuevoTitular) {
    this.titular = nuevoTitular;
}
Auto.prototype.verAuto = function() {
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
}
Auto.prototype.encender = function() {
    alert("El automovil fué encendido.");
}

function mostrarRegistros() {
    listadoVehicular = document.querySelector("#listadoAutomoviles");
    listadoVehicular.innerHTML = "";
    for(let auto of arrayAutos) {
        let item = document.createElement('li');
        item.innerHTML = auto.verAuto();
        listadoVehicular.appendChild(item);
    }
}