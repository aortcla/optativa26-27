const info = document.getElementById("info");

if(!info){
    throw Error("No existe info");
}

enum Prioridad {
    baja, media, alta, critica
};

enum Estado {
    ABIERTA = "abierta",
    EN_CURSO = "en curso",
    RESUELTA = "resuelta"
}

interface Incidencia {
        id : number;
        empleado : string;
        prioridad : Prioridad;
        estado : Estado;
        fecha : string;
        //fecha es date: : Date y para pone la fecha que quieres es new Date(2026, 9, 10) ese es el 10 de octubre de 2026
}

let listaIncidencias : Incidencia [] = [
    {
        id : 1,
        empleado: "Empleado1",
        prioridad : Prioridad.baja,
        estado : Estado.ABIERTA,
        fecha : "10/10/2026"
    },
    {
        id : 2,
        empleado: "Empleado2",
        prioridad : Prioridad.alta,
        estado : Estado.EN_CURSO,
        fecha : "10/10/2026"
    },
    {
        id : 3,
        empleado: "Empleado3",
        prioridad : Prioridad.media,
        estado : Estado.RESUELTA,
        fecha : "10/10/2026"
    },
    {
        id : 4,
        empleado: "Empleado4",
        prioridad : Prioridad.critica,
        estado : Estado.RESUELTA,
        fecha : "10/10/2026"
    }
];

let incidencia1 : Incidencia = {
        id : 4,
        empleado: "Empleado4",
        prioridad : Prioridad.critica,
        estado : Estado.RESUELTA,
        fecha : "10/10/2026"
};

function filtrarPorEstado(lista : Incidencia [], estado : Estado) : string{
    let nuevalista : Incidencia [] = [];

    for (const elem of lista) {

        if(elem.estado == estado){
            nuevalista.push(elem);
        }
        
    }

    let cadena : string = "";
    for (const elem of nuevalista) {
    cadena += "ID: "+elem.id+"<br>"+
            "Empleado: "+elem.empleado+"<br>"+
            "Prioridad: "+elem.prioridad+"<br>"+
            "Estado: "+elem.estado+"<br>"+
            "Fecha: "+elem.fecha+"<br><br>";
}

return cadena;
}

function urgentes(lista : Incidencia []) : string{
let nuevalista : Incidencia [] = [];

for (const elem of lista) {
    if(elem.estado != Estado.RESUELTA && elem.prioridad >= Prioridad.alta){
        nuevalista.push(elem);
    }
}

let cadena : string = "";
for (const elem of nuevalista) {
    cadena += "ID: "+elem.id+"<br>"+
            "Empleado: "+elem.empleado+"<br>"+
            "Prioridad: "+elem.prioridad+"<br>"+
            "Estado: "+elem.estado+"<br>"+
            "Fecha: "+elem.fecha+"<br><br>";
}

return cadena;

}

function cambiarEstado(incidencia : Incidencia, nuevoEstado : Estado) : string{
    let estadoAntiguo = incidencia.estado;

    incidencia.estado = nuevoEstado;

    return "La incidencia tenia como estado "+estadoAntiguo+" y su estado nuevo es "+incidencia.estado;
}

info.innerHTML += filtrarPorEstado(listaIncidencias, Estado.ABIERTA)+"<br>";
info.innerHTML += urgentes(listaIncidencias);
info.innerHTML += cambiarEstado(incidencia1, Estado.ABIERTA);
