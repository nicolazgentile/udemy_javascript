let arrMascotas = [];

class Animal {
    constructor(nombre, peso, edad) {
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    get nombre() {return this._nombre; }
    get peso() {return this._peso; }
    get edad() {return this._edad; }

    set nombre(nuevoNombre) { this._nombre = nuevoNombre; }
    set peso(nuevoPeso) { this.peso = nuevoPeso; }
    set edad(nuevaEdad) { this._edad = nuevaEdad; }

    informacion() {
        return `${this._nombre}: pesa ${this._peso} kg, tiene ${this._edad} años`;
    }
}


class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this._raza = raza;
    }

    get raza() { return this._raza; }
    set raza(nuevaRaza) { this._raza = nuevaRaza; }

    informacion() {
        return super.informacion() + " , y es un hermoso " + this.raza;
    }
}


class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `super.informacion(), y es ${this.sexo}`;
    }
}

Gato.prototype.sexo = function() { return this.sexo; }
Gato.prototype.sexo = function(NuevoSexo) { this.sexo = NuevoSexo; }


class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this._color = color;
    }

    get color() { return `y es color ${this._color} \n`; }
    set color(nuevoColor) { this._color = nuevoColor; }

    informacion() {
        // Siempre utilizar getter y setter para acceder a variables privadas
        return `super.informacion(), y es color ${this.color()}`;
    }
}

function nuevoRegistro() {
    document.querySelector('#formulario').style.display = "block";
}

function registrarMascota() {
    let clase;
    especie = document.getElementById("especie").value;
    nombre = document.getElementById("nombre");
    peso = document.getElementById("peso");
    edad = document.getElementById("edad");
    observacion = document.getElementById("observacion");
    switch(especie) {
        case 'perro':
            clase = new Perro(nombre.value, peso.value, edad.value, observacion.value);
            break;
        case 'gato':
            clase = new Gato(nombre.value, peso.value, edad.value, observacion.value);
            break;
        case 'conejo':
            clase = new Conejo(nombre.value, peso.value, edad.value, observacion.value);
            break;
    }
    arrMascotas.push(clase);

    especie.value = '';
    document.querySelector('#formulario').style.display = "none";
}

function listarMascotas() {
    listado = document.querySelector("#listadoMascotas");
    listado.innerHTML = "";
    for(let mascota of arrMascotas) {
        let item =document.createElement("li");
        item.innerText = mascota.informacion() + "\n";
        listado.appendChild(item);
    }
}
