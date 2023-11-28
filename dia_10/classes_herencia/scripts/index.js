class Deportista {
    constructor(nombre, deporte) {
        this.nombre = nombre;
        this.deporte = deporte;
    }
}

class Futbolista extends Deportista{
    constructor(nombre, posicion, goles) {
        super(nombre, 'fobal');
        this._posicion = posicion;
        this.goles = goles;
    }

    get posicion() {
        return this._posicion;
    }
    set posicion(nuevaPos) {
        this._posicion = nuevaPos;
    }
}

Futbolista.prototype.goles = function() {
    return this.goles;
 }
 Futbolista.prototype.goles = function(cantActual) {
    this.goles = cantActual;
 }