import {Personaje} from "./Personaje";

const info = document.getElementById("info");
const ataqueA = document.getElementById("ataqueA");
const ataqueB = document.getElementById("ataqueB");

if(!info)
  throw Error ("No existe info");

if(!ataqueA)
  throw Error ("No existe ataqueA");

if(!ataqueB)
  throw Error ("No existe ataqueB");

var personaje1 = new Personaje("Conan", 20, 30 , 100);
var personaje2 = new Personaje("Hulk", 50, 60 , 200);

ataqueA.innerHTML = `${personaje1.Nombre} ataca a ${personaje2.Nombre}`;
ataqueB.innerHTML = `${personaje2.Nombre} ataca a ${personaje1.Nombre}`;

info.innerHTML = personaje1.saluda();
info.innerHTML += "<br>"+personaje1.Nombre+" tiene un ataque de "+personaje1.Ataque+
                " una defensa de "+personaje1.Defensa+" y una salud de "+personaje1.Vida;

info.innerHTML += Personaje.info(personaje1);
info.innerHTML += Personaje.info(personaje2);

/***********************************************************************/

ataqueA.onclick = () => {
    Personaje.luchar(personaje1, personaje2);
    info.innerHTML += `${personaje1.Nombre} ataca a ${personaje2.Nombre}.
                       A ${personaje2.Nombre} le queda ${personaje2.Vida}`;
}