"use strict";
const info = document.getElementById("info");
const inNombre = document.getElementById("nombre");
const btNombre = document.getElementById("btnNombre");
const inEdad = document.getElementById("edad");
const btEdad = document.getElementById("btnEdad");
const inEmail = document.getElementById("email");
const btFormulario = document.getElementById("btnFormulario");
if (!info)
    throw Error("No existe info");
if (!inNombre)
    throw Error("No existe nombre");
if (!btNombre)
    throw Error("No existe btnNombre");
if (!inEdad)
    throw Error("No existe edad");
if (!btEdad)
    throw Error("No existe btnEdad");
if (!inEmail)
    throw Error("No existe email");
if (!btFormulario)
    throw Error("No existe btnFormulario");
//acciones de los botones
btNombre.addEventListener('click', () => {
    info.innerHTML += normalizarNombre(inNombre.value);
});
btEdad.addEventListener('click', () => {
    info.innerHTML += leerEdad(inEdad.value);
});
btFormulario.addEventListener('click', () => {
    let formulario1 = crearFormulario(inNombre.value, inEmail.value);
    if (formulario1)
        info.innerHTML += mostrarFormulario(formulario1);
    else
        info.innerHTML += "Error";
});
/*********************************** Functions ****************************************/
function normalizarNombre(valor) {
    let cadena = "";
    if (typeof valor === "string") {
        cadena = valor;
        cadena.trimStart();
        cadena.trimEnd();
        cadena.toUpperCase();
        cadena += "<br>";
    }
    else {
        cadena += "NOMBRE INVALIDO";
    }
    return cadena;
}
function leerEdad(valor) {
    let numero = null;
    if (typeof valor === "number") {
        numero = valor;
    }
    if (typeof valor === "string") {
        if (typeof Number.parseFloat(valor) == "number") {
            numero = Number.parseFloat(valor);
        }
    }
    return numero;
}
function crearFormulario(usuario, email) {
    let campo1 = "";
    let campo2 = "";
    if (typeof usuario === "string" && typeof email === "string") {
        campo1 = usuario;
        campo2 = email;
        let formulario1 = { usuario: campo1, email: campo2 };
        return formulario1;
    }
    else
        return null;
}
function mostrarFormulario(formulario) {
    return "Usuario: " + formulario.usuario + " Email: " + formulario.email;
}
