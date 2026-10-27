"use strict";
const info = document.getElementById("info");
if (!info)
    throw Error("No existe info");
let ruta1 = [
    { punto: { latitud: 1, longitud: 1 } },
    { punto: { latitud: 2, longitud: 2 } },
    { punto: { latitud: 3, longitud: 3 } },
    { punto: { latitud: 4, longitud: 4 } }
];
function distanciaAproximada(p1, p2) {
    let total = 0;
    total = Math.sqrt((Math.pow(p2.latitud - p1.latitud, 2)) + (Math.pow((p2.longitud - p1.longitud), 2)));
    return total;
}
let punto1 = { latitud: 1, longitud: 1 };
let punto2 = { latitud: 2, longitud: 2 };
info.innerHTML += `Diferencia entre el punto 1 y punto 2 es ${distanciaAproximada(punto1, punto2)}`;
function distanciaTotal(ruta) {
    let total = 0;
    for (let i = 0; i < ruta.length - 1; i++) {
        total += distanciaAproximada(ruta[i].punto, ruta[i + 1].punto);
    }
    return total;
}
info.innerHTML += `<br>La distancia total de la ruta 1 es: ${distanciaTotal(ruta1)}`;
let entrega1 = [1, punto1, true];
let entrega2 = [2, punto2, false];
//let entrega3 : Entrega = [punto1, 2, false];
info.innerHTML += `<br><br>Entrega 1:<br>
                    ID: ${entrega1[0]}<br>
                    Punto: Latitud ${entrega1[1].latitud}, Longitud ${entrega1[1].longitud}<br>
                    Firmado por cliente: ${entrega1[2] ? "Si" : "No"}<br>`;
info.innerHTML += `<br><br>Entrega 2:<br>
                    ID: ${entrega2[0]}<br>
                    Punto: Latitud ${entrega2[1].latitud}, Longitud ${entrega2[1].longitud}<br>
                    Firmado por cliente: ${entrega2[2] ? "Si" : "No"}<br>`;
