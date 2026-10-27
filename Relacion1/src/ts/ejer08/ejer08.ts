const info = document.getElementById("info");
const inNombre = document.getElementById("nombre") as HTMLInputElement;
const btNombre = document.getElementById("btnNombre");
const inEdad = document.getElementById("edad") as HTMLInputElement;
const btEdad = document.getElementById("btnEdad");
const inEmail = document.getElementById("email") as HTMLInputElement;
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
   info.innerHTML+= normalizarNombre(inNombre.value);
});

btEdad.addEventListener('click', () => {
    info.innerHTML += leerEdad(inEdad.value);
});

btFormulario.addEventListener('click', () => {
    let formulario1 : Formulario | null = crearFormulario(inNombre.value, inEmail.value)
    if(formulario1)
        info.innerHTML += mostrarFormulario(formulario1);
    else
        info.innerHTML += "Error";
});


/*********************************** Functions ****************************************/
function normalizarNombre(valor : unknown) : string {
    let cadena : string = "";

    if(typeof valor === "string"){
        cadena = valor;
        cadena.trimStart();
        cadena.trimEnd();
        cadena.toUpperCase();
        cadena +="<br>";
    }else{
        cadena += "NOMBRE INVALIDO";
    }

    return cadena;
}

function leerEdad(valor : unknown) : number | null{

    let numero : number | null = null;

    if(typeof valor === "number"){
        numero = valor;
    }

    if(typeof valor === "string"){
        if(typeof Number.parseFloat(valor) == "number"){
            numero = Number.parseFloat(valor);
        }
    }

    return numero;

}

//interfaz Formulario
interface Formulario {
    usuario : string;
    email : string;
}

function crearFormulario(usuario : unknown, email : unknown) : Formulario | null{
    let campo1 : string = "";
    let campo2 : string = "";

    if(typeof usuario === "string" && typeof email === "string"){
        campo1 = usuario;
        campo2 = email;

        let formulario1 = {usuario : campo1, email : campo2};
        return formulario1;
    }else
        return null;
}

function mostrarFormulario(formulario : Formulario) : string {
    return "Usuario: "+formulario.usuario+" Email: "+formulario.email;
}

