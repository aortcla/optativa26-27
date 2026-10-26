export class Personaje {
    protected nombre: string;
    protected ataque: number;
    protected defensa: number;
    #vida: number;

    constructor(_nombre : string, _ataque : number, _defensa : number, _vida : number){
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.#vida = _vida;
    }

    get Nombre():string{
        return this.nombre;
    }
    get Ataque():number{
        return this.ataque;
    }
    get Defensa():number{
        return this.defensa;
    }
    get Vida():number{
        return this.#vida;
    }

    set Nombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }
    set Ataque(nuevoAtaque:number){
        this.ataque = nuevoAtaque;
    }
    set Defensa(nuevaDefensa:number){
        this.defensa = nuevaDefensa;
    }
    set Vida(nuevaVida:number){
        this.#vida = nuevaVida;
    }

    
    saluda():string{
        return `Bienvenido al juego, ${this.nombre}`;
    }

    static info (p : Personaje) : string {
        return p.Nombre+" tiene un ataque de "+p.Ataque+
                "una defensa de "+p.Defensa+" y una salud de "+p.Vida;
    }

    vivo (){
        return this.#vida > 0;
    }

    static luchar (atacante : Personaje, defensor : Personaje) {
        let critico : number = Math.random();

        let daño : number = atacante.ataque - defensor.defensa;

        if(daño < 0){
            daño = atacante.ataque;
        }

        if(critico < 0.1){
            daño *= 2;
            console.log(`Ataque critico de ${atacante.nombre} a ${defensor.nombre}`)
        }

        defensor.Vida -= daño;
    }

}