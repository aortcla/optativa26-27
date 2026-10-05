import {stdin as input, stdout as output} from 'process';
import { Readline } from 'readline/promises';

const rl = readline.createInterface({input, output});

console.log("Elige una opcion del menú: ");
console.log("0 - Sumar");
console.log("1 - Restar");
console.log("2 - Multiplicar");
console.log("3 - Dividir");

console.log("Elige la opcion 5 para salir del programa");

rl.question("Elige una opcion: ", (nombre) => {
    console.log(`Hola ${nombre}`);
})
