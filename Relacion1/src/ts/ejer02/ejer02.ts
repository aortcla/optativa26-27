const info = document.getElementById("info");

if(!info)
    throw Error ("No existe info");


interface Producto{
    readonly id : number;
    nombre : string;
    precio : number;
    descuento ?: number;
}

interface Carrito {
    producto : Producto;
    cantidad : number;
}

let producto1 : Producto  = {
    id : 1,
    nombre : "Agua",
    precio : 0.5
}

let producto2 : Producto  = {
    id : 2,
    nombre : "Patatas",
    precio : 5,
    descuento : 50
}

let producto3 : Producto  = {
    id : 3,
    nombre : "Aceite",
    precio : 2
}

let carrito1 : Carrito [] = [
    {
        producto : producto1,
        cantidad : 10
    },
    {
        producto : producto2,
        cantidad : 5
    },
    {
        producto : producto3,
        cantidad : 2
    }
]

function precioFinal(producto : Producto): number{
    if(producto.descuento !== undefined){
        return producto.precio - (producto.precio * producto.descuento / 100);
    }

    return producto.precio;
}

function totalCarrito(carrito : Carrito [] ) : number{
    let precio = 0;

    for(let elem of carrito){
        precio += precioFinal(elem.producto) * elem.cantidad;
    }

    return precio;
}

info.innerHTML = "Precio Total del Carrito: "+totalCarrito(carrito1).toFixed(2)+"€";


