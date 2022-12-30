//ingresar datos del comprador
//elegir producto desesado 
//




let nombre = prompt("Ingresa tu Nombre")
let apellido = prompt("Ingresa tu Apellido")
let telefono = prompt("Ingresa tu Telefono")
alert(nombre+ " " +apellido+ " " +telefono);





alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Silla $3000 2-Sillon $85000  3-Ropero $50000  4-Futon $60000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Silla, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Sillon, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 85000)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Ropero, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 50000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Futon, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 60000)
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-Silla $3000 2-Sillon $85000  3-Ropero $50000  4-Futon $60000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
        alert("El envio es gratuito")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}



const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
    if (metodo == "tarjeta") {
        total *= 1.1
        console.log(total);
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("tenes un descuento de 1000, el total es:" + total)
    }


}

metodoDePago()