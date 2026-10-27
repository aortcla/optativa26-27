const info = document.getElementById("info");

if(!info){
    throw Error("No existe Info");
};

type Estado = "pendiente" | "pagado" | "enviado" | "entregado" | "cancelado";

interface Pedido {
    numero : number;
    nombre : string;
    importe : number;
    estado : Estado;
}

function mensajeCliente(p : Pedido) : string {
    let estado = p.estado;

    switch (estado) {
        case "pendiente":
            return "Su pedido esta "+p.estado;
            break;
        case "pagado":
            return "Su pedido esta "+p.estado;
            break;
        case "enviado":
            return "Su pedido esta "+p.estado;
            break;
        case "entregado":
            return "Su pedido esta "+p.estado;
            break;
        case "cancelado":
            return "Su pedido esta "+p.estado;
            break;
        default:
            const noEsta : never = estado;
            return noEsta;
            break;
    }
}

function error (mensaje : string) : never {
    throw new Error(mensaje);
}

function cancelarPedido(p : Pedido) : string{
    let estado = p.estado;

    if(estado == "cancelado"){
        error("El pedido ya esta cancelado");
    }else if(estado == "entregado"){
        error("El pedido ya esta entregado");
    }else{
        p.estado = "cancelado";
        return "El pedido ha cambiado su estado de "+estado+ " a cancelado.";
    }
}

let pedido1 : Pedido = {
    numero : 1,
    nombre : "paquete1",
    importe : 10,
    estado : "enviado"
};

info.innerHTML += cancelarPedido(pedido1);
