document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los botones por su ID
  const botonCalcularPeso = document.getElementById("calcularPeso");
  const botonBuscarPlaneta = document.getElementById("buscarPlaneta");
  const botonFiltrarPlanetas = document.getElementById("filtrarPlanetas");

  // Función para mostrar el mensaje
  function mostrarAgradecimiento(mensaje) {
    Toastify({
      text: mensaje,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  }

  botonCalcularPeso.addEventListener("click", () =>
    mostrarAgradecimiento(
      "🚀  Gracias por calcular tu peso . 🌌"
    )
  );
  botonBuscarPlaneta.addEventListener("click", () =>
    mostrarAgradecimiento(
      "🔍  Gracias por buscar tu planeta. 🪐"
    )
  );
  botonFiltrarPlanetas.addEventListener("click", () =>
    mostrarAgradecimiento(
      "⚖️  Gracias por filtrar tu planeta. 🌠"
    )
  );
});
