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