const productos = [
    { id: 1, nombre: "Camiseta", precio: 20 },
    { id: 2, nombre: "Pantalón", precio: 30 },
    { id: 3, nombre: "Zapatos", precio: 50 }
];

let carrito = [];

function mostrarProductosDisponibles() {
    let productosAlert = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        productosAlert += `${productos[i].id}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(productosAlert);
}

function agregarAlCarrito() {
    mostrarProductosDisponibles();
    const seleccion = parseInt(prompt("Seleccione el número del producto que desea agregar al carrito:"));
    const producto = productos.find(prod => prod.id === seleccion);
    if (producto) {
        const cantidad = parseInt(prompt(`Ingrese la cantidad de "${producto.nombre}" que desea agregar:`));
        if (!isNaN(cantidad) && cantidad > 0) {
            const subtotal = producto.precio * cantidad;
            const item = { ...producto, cantidad, subtotal };
            carrito.push(item);
            console.log(`${cantidad} "${producto.nombre}" ha sido agregado al carrito.`);
        } else {
            console.log("Cantidad inválida.");
        }
    } else {
        console.log("Producto no encontrado.");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let carritoAlert = "Contenido del carrito:\n";
        for (let i = 0; i < carrito.length; i++) {
            carritoAlert += `${i + 1}. ${carrito[i].nombre} - Cantidad: ${carrito[i].cantidad} - Subtotal: $${carrito[i].subtotal}\n`;
        }
        alert(carritoAlert);
    }
}

function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        mostrarCarrito();
        const seleccion = parseInt(prompt("Seleccione el número del producto que desea eliminar del carrito:"));
        if (seleccion >= 1 && seleccion <= carrito.length) {
            const productoEliminado = carrito.splice(seleccion - 1, 1);
            console.log(`${productoEliminado[0].nombre} ha sido eliminado del carrito.`);
        } else {
            console.log("Selección inválida.");
        }
    }
}

function iniciarCompra() {
    console.log("Bienvenido al simulador de compras.");
    while (true) {
        const opcion = parseInt(prompt("Seleccione una opción:\n1. Ver productos disponibles\n2. Agregar producto al carrito\n3. Ver carrito y finalizar compra\n4. Eliminar producto del carrito\n5. Cancelar compra"));
        if (opcion === 1) {
            mostrarProductosDisponibles();
        } else if (opcion === 2) {
            agregarAlCarrito();
        } else if (opcion === 3) {
            mostrarCarrito();
            break;
        } else if (opcion === 4) {
            eliminarDelCarrito();
        } else if (opcion === 5) {
            console.log("Compra cancelada.");
            break;
        } else {
            console.log("Opción inválida.");
        }
    }
}

iniciarCompra();
