import {Alumno} from "./Alumno";

const info = document.getElementById("info");

if(!info)
    throw Error ("No existe info");

var alumno1 = new Alumno("Angel", "2daw", false, [5,6,7,8]);

info.innerHTML += alumno1.toString();
alumno1.mostrarBoletin();
