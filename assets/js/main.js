// =============================
// Clase Carrito
// =============================
class Carrito {
    constructor() {
        // Carga carrito desde localStorage o arreglo vacío
        this.items = JSON.parse(localStorage.getItem("carrito")) || [];
        this.lista = document.querySelector("#lista-carrito");
        this.totalEl = document.querySelector("#total");

        this.mostrar();
    }

    // Agregar producto
    agregar(nombre, precio) {
        this.items.push({ nombre, precio });
        this.guardar();
        this.mostrar();
        alert("Producto agregado al carrito 🛒");
    }

    // Mostrar carrito en pantalla
    mostrar() {
        this.lista.innerHTML = "";
        let total = 0;

        this.items.forEach(producto => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            this.lista.appendChild(li);
            total += producto.precio;
        });

        this.totalEl.textContent = "Total: $" + total;
    }

    // Vaciar carrito
    vaciar() {
        this.items = [];
        localStorage.removeItem("carrito");
        this.mostrar();
    }

    // Guardar en localStorage
    guardar() {
        localStorage.setItem("carrito", JSON.stringify(this.items));
    }
}

// =============================
// Instancia global del carrito
// =============================
const carrito = new Carrito();

// =============================
// Funciones globales (para HTML)
// =============================
function agregarAlCarrito(nombre, precio) {
    carrito.agregar(nombre, precio);
}

function vaciarCarrito() {
    carrito.vaciar();
}
