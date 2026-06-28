precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function actualizarTotal() {
var cantidad = Number(document.querySelector("#cantidad").innerHTML);
var total = cantidad * precio;
document.querySelector("#valor-total").innerHTML = total;
}

// Inicializar el total en 0
actualizarTotal();
 


 