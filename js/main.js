"use strict";
const h11 = document.getElementById("h11");
var marca = "Ford";
var myArray = [];
myArray.push(true);
for (let elem of myArray) {
    console.log(elem);
}
var car1 = {
    matricula: "1234M",
    modelo: "Mustang",
    itv_pasada: true,
    color: "red"
};
var person1 = {
    name: "Pepe",
    age: 45,
    mail: "pepe@mail.com"
};
//nombre, apellido, edad, activo
var alumn1 = ["Ana", "Pérez", 19, true];
var desconocido = "";
desconocido = 5;
if (typeof desconocido == "number") {
    console.log("Valor desconocido es: " + (desconocido + 6));
}
desconocido = "Hola";
desconocido = desconocido + " Antonio";
console.log(desconocido);
//# sourceMappingURL=main.js.map