export class Personaje {
    protected nombre: string;
    protected ataque: number;
    protected defensa: number;
    protected vida: number;

    constructor(_nombre : string, _ataque : number, _defensa : number, _vida : number){
        this.nombre = _nombre;
        this.ataque = _ataque;
        this.defensa = _defensa;
        this.vida = _vida;
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
        return this.vida;
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
        this.vida = nuevaVida;
    }

    
    saluda():string{
        return `Bienvenido al juego, ${this.nombre}`;
    }

}