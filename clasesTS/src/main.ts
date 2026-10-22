import {Personaje} from "./Personaje";

const info = document.getElementById("info");

if(!info)
  throw Error ("No existe info");

var personaje1 = new Personaje("Conan", 20, 30 , 100);

info.innerHTML = personaje1.saluda();
info.innerHTML += "<br>"+personaje1.Nombre+" tiene un ataque de "+personaje1.Ataque+
                "una defensa de "+personaje1.Defensa+" y una salud de "+personaje1.Vida;