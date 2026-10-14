const h11 = document.getElementById("h11");

var marca:string = "Ford";
var myArray:boolean [] = [];

myArray.push(true);

for(let elem of myArray){
    console.log(elem);
}

type Car = {
    matricula:string,
    modelo:string,
    itv_pasada:boolean,
    color:string
}

var car1:Car = {
    matricula:"1234M",
    modelo:"Mustang",
    itv_pasada:true,
    color:"red"
}


interface Person{
    name: String,
    age: number,
    mail: string
}

var person1:Person = {
    name: "Pepe",
    age: 45,
    mail: "pepe@mail.com"
}

//nombre, apellido, edad, activo
var alumn1: [string, string, number, boolean] = ["Ana","Pérez", 19, true];

var desconocido :unknown = "";

desconocido = 5;

if(typeof desconocido == "number"){
    console.log("Valor desconocido es: "+ (desconocido+6));
}

desconocido = "Hola";

desconocido = desconocido + " Antonio";

console.log(desconocido);

type direccion = "arriba" | "abajo" | "izquierda" | "derecha";
function muevePersonaje(dire: direccion){
    while(true){
        switch(dire){
            case "arriba" : alert("Arriba");
            break;
            case "abajo" : alert("Abajo");
            break;
            case "izquierda" : alert("Izquierda");
            break;
            case "derecha" : alert("Derecha");
            break;
        }
    }
}

type frutas = "manzanas" | "peras" | "platanos";
let stock : Record<frutas, number> = {
    manzanas : 10,
    peras : 5,
    platanos : 0
};

if(h11){
    h11.innerHTML += valores("Pepe", 55) + "<br>";
    h11.innerHTML += valores("Ana", 20, false) + "<br>";
    h11.innerHTML += valores("María", 39, true) + "<br>";
}

function valores(name:string, cantidad:number, activo?:boolean): string | number{
    if(activo){
        return name;
    }
    else return cantidad;
}