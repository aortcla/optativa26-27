"use strict";
const info = document.getElementById("info");
if (!info)
    throw Error("No existe info");
let producto1 = {
    id: 1,
    nombre: "Agua",
    precio: 0.5
};
let producto2 = {
    id: 2,
    nombre: "Patatas",
    precio: 5,
    descuento: 50
};
let producto3 = {
    id: 3,
    nombre: "Aceite",
    precio: 2
};
let carrito1 = [
    {
        producto: producto1,
        cantidad: 10
    },
    {
        producto: producto2,
        cantidad: 5
    },
    {
        producto: producto3,
        cantidad: 2
    }
];
function precioFinal(producto) {
    if (producto.descuento !== undefined) {
        return producto.precio - (producto.precio * producto.descuento / 100);
    }
    return producto.precio;
}
function totalCarrito(carrito) {
    let precio = 0;
    for (let elem of carrito) {
        precio += precioFinal(elem.producto) * elem.cantidad;
    }
    return precio;
}
info.innerHTML = "Precio Total del Carrito: " + totalCarrito(carrito1).toFixed(2) + "€";
