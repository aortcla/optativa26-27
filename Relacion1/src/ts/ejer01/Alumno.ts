export class Alumno{

    protected nombre : string;
    protected curso : string;
    protected repetidor : boolean;
    protected notas : number[];

    constructor(_nombre : string, _curso : string, _repetidor : boolean, _notas : number[]){
        this.nombre = _nombre;
        this.curso = _curso;
        this.repetidor = _repetidor;
        this.notas = _notas;
    }

    get Nombre() : string{
        return this.nombre;
    }
    get Curso() : string{
        return this.curso;
    }
    get Repetidor() : boolean{
        return this.repetidor;
    }
    get Notas() : number[]{
        return this.notas;
    }

    set Nombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }
    set Curso(nuevoCurso:string){
        this.curso = nuevoCurso;
    }
    set Repetidor(nuevoRepetidor:boolean){
        this.repetidor = nuevoRepetidor;
    }
    set Notas(nuevoNotas:number[]){
        this.notas = nuevoNotas;
    }

    calculaMedia():number{
        let total : number;
        let suma : number = 0;
        for(let i = 0; i< this.notas.length;i++){
            suma += this.notas[i];
        }

        total = suma / (this.notas.length);

        return total;
    }

    notaFinal(puntos : number = 0):number{
        let final = this.calculaMedia() + puntos;
        
        if(final > 10){
            return 10;
        }

        return final;
    }

    mostrarBoletin(){
        console.log("Infomacion del Alumno:\n"+
                    "Nombre: "+this.nombre+"\n"+
                    "Curso: "+this.curso+"\n"+
                    "Nota Final: "+this.notaFinal());
    }

    toString(): string{
        return "Nombre: "+this.nombre+"<br>"+
                "Curso: "+this.curso+"<br>"+
                "Repetidor: "+this.repetidor+"<br>"+
                "Notas: "+this.notas+"<br>"+
                "Nota Final: "+this.notaFinal();
    }



}