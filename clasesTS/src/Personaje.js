export class Personaje {
    nombre;
    ataque;
    defensa;
    vida;
    constructor(_nombre, _ataque, _defensa, _vida) {
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.vida = _vida;
    }
    get Nombre() {
        return this.nombre;
    }
    get Ataque() {
        return this.ataque;
    }
    get Defensa() {
        return this.defensa;
    }
    get Vida() {
        return this.vida;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    set Ataque(nuevoAtaque) {
        this.ataque = nuevoAtaque;
    }
    set Defensa(nuevaDefensa) {
        this.defensa = nuevaDefensa;
    }
    set Vida(nuevaVida) {
        this.vida = nuevaVida;
    }
    saluda() {
        return `Bienvenido al juego, ${this.nombre}`;
    }
}
