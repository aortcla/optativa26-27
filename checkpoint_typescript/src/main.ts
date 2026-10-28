const totalFacturado = document.getElementById("total-facturado");
const ocupacion = document.getElementById("ocupacion");
const inputID = document.getElementById("input-id") as HTMLInputElement;
const btBuscar = document.getElementById("btBuscar");
const resultadoConsulta = document.getElementById("resultado-consulta");
const tablaReservas = document.getElementById("tabla-reservas");

if(!btBuscar)
    throw Error("No existe Boton buscar");

if(!totalFacturado)
    throw Error("No existe total facturado");

if(!ocupacion)
    throw Error("No existe ocupacion");

if(!inputID)
    throw Error("No existe input ID");

if(!resultadoConsulta)
    throw Error("No existe resultado consulta");

if(!tablaReservas)
    throw Error("No existe tabla reserva");

enum tipoHabitacion {
    INDIVIDUAL = "INDIVIDUAL",
    DOBLE = "DOBLE",
    SUIT = "SUIT"
}

interface Habitacion {
    readonly numero : number;
    tipo : tipoHabitacion;
    precioNoche : number;
}

let habitacion1 : Habitacion = { numero: 101, tipo: tipoHabitacion.INDIVIDUAL, precioNoche: 55 };
let habitacion2 : Habitacion = { numero: 102, tipo: tipoHabitacion.DOBLE, precioNoche: 80 }
let habitacion3 : Habitacion = { numero: 301, tipo: tipoHabitacion.SUIT, precioNoche: 160 }

type Estancia = [string, number];

type Estado = "confirmada" | "cancelada" | "finalizada";

interface Reserva {
    readonly id : number;
    huesped : string;
    email ?: string;
    habitacion : number;
    estancia : Estancia;
    estado : Estado;
}

let reserva1 : Reserva = { id: 1, huesped: "Ana López", email: "ana@mail.com", habitacion: 102, estancia:
["2026-11-03", 3], estado: "confirmada" };

let reserva2 : Reserva = { id: 2, huesped: "Luis Pérez", habitacion: 301, estancia:
["2026-11-05", 2], estado: "confirmada" };

let reserva3 : Reserva = { id: 3, huesped: "Marta Ruiz", email: "marta@mail.com", habitacion: 101, estancia:
["2026-10-28", 4], estado: "finalizada" };

let reserva4 : Reserva = { id: 4, huesped: "Pablo Gil", habitacion: 102, estancia:
["2026-11-10", 5], estado: "cancelada" };

let arrayReservas : Reserva [] = [reserva1, reserva2, reserva3, reserva4];
let arrayHabitaciones : Habitacion [] = [habitacion1, habitacion2, habitacion3];

/******************************************* Mostrar por pantalla *************************************************/

totalFacturado.innerHTML += importeTotal();
tablaReservas.innerHTML += mostrarReservas();




/**************************************** FUNCTIONS *****************************************/
function buscarHabitacion(numHabitacion : number) : Habitacion{
let encontrada : Habitacion = null;
    
    for (const elem of arrayHabitaciones) {
        if(elem.numero === numHabitacion){
            encontrada = elem;
        }
    }

    return encontrada;

}

function importeReserva(r : Reserva) : number {
    let importe : number = 0;
    let habitacion1 : Habitacion = buscarHabitacion(r.habitacion);

        if(r.estado != "cancelada"){
            importe += r.estancia[1] * habitacion1.precioNoche;

            if(r.estancia[1] > 3){
                importe *= 0.1;
            }
        }

    return importe;
}


function formatoImporte(importe : number, moneda ?: string){
    
    return importe.toFixed(2)+moneda;

}

function mensajeEstadoReserva(estado : Estado) : string {
    let cadena : string = "";

    switch (estado) {
        case "confirmada":
            cadena += "Reserva confirmada. ¡Te esperamos!"
            break;

        case "finalizada":
            cadena += "Su estancia ha finalizado. Esperemos que haya disfrutado";
            break;

        case "cancelada":
            cadena += "Su reserva esta cancelada.";
            break;
    
        default:
            const noEsta : never = estado;
            return noEsta;
            break;
    }

    return cadena;
}

function importeTotal() : string {
    let total = 0;

    for (const elem of arrayReservas) {
        total += importeReserva(elem);
    }

    return formatoImporte(total, "€");
}

function mostrarReservas() : string {
    let cadena : string = "";

    for (const elem of arrayReservas) {
        cadena += "<tr><td>"+elem.id+"</td><td>"+elem.huesped+
        "</td><td>"+elem.habitacion+"</td><td>"+elem.estancia[0]+
        "</td><td>"+elem.estancia[1]+
        "</td><td>"+elem.estado+
        "</td><td>"+importeReserva(elem)+"</td></tr>";
    }

    return cadena;

}


