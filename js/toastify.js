document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los botones por su ID
  var botonCalcularPeso = document.getElementById("calcularPeso");
  var botonBuscarPlaneta = document.getElementById("buscarPlaneta");
  var botonFiltrarPlanetas = document.getElementById("filtrarPlanetas");

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

  botonCalcularPeso.addEventListener("click", function() {
    mostrarAgradecimiento("🚀  Gracias por calcular tu peso . 🌌");
  });
  botonBuscarPlaneta.addEventListener("click",function () {
    mostrarAgradecimiento("🔍  Gracias por buscar tu planeta. 🪐");
  });
  botonFiltrarPlanetas.addEventListener("click",function () {
    mostrarAgradecimiento("⚖️  Gracias por filtrar tu planeta. 🌠");
    
  });
});
