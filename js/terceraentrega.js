// Cargar datos de planetas desde un archivo JSON y almacenar en Local Storage
async function cargarPlanetas() {
  try {
      const response = await fetch('planetas.json'); // Cambia 'planetas.json' si es necesario
      if (!response.ok) throw new Error("Error al cargar los datos");
      
      const data = await response.json();
      localStorage.setItem('planetas', JSON.stringify(data)); // Almacena los planetas en Local Storage
  } catch (error) {
      console.error(error); // Manejar errores de carga
  }
}

// Cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", async () => {
  await cargarPlanetas(); // Cargar planetas en Local Storage

  // Obtener los planetas del Local Storage
  const planetas = JSON.parse(localStorage.getItem('planetas')) || [];
  
  const pesoInput = document.getElementById("peso");
  const opcionSelect = document.getElementById("opcion");
  const resultadoDiv = document.getElementById("resultado");



  // Calcular peso en el planeta seleccionado
  document.getElementById("calcularPeso").addEventListener("click", () => {
      const planetaId = parseInt(document.getElementById("planetaSelect").value);
      const planeta = planetas.find((p) => p.id === planetaId);
      const pesoUsuario = parseFloat(pesoInput.value);

      if (planeta && !isNaN(pesoUsuario)) {
          const pesoFinal = ((pesoUsuario * planeta.gravedad) / 9.8).toFixed(2);
          resultadoDiv.textContent = `Tu peso en ${planeta.nombre} es ${pesoFinal} kilos.`;
      } else {
          resultadoDiv.textContent = "Por favor, introduce un peso válido.";
      }
  });

  // Buscar un planeta por su nombre
  document.getElementById("buscarPlaneta").addEventListener("click", () => {
      const nombre = document.getElementById("buscarNombre").value.toLowerCase();
      const encontrado = planetas.find((p) => p.nombre.toLowerCase() === nombre);

      resultadoDiv.textContent = encontrado
          ? `Planeta encontrado: ${encontrado.nombre} con gravedad ${encontrado.gravedad}.`
          : "Planeta no encontrado.";
  });

  // Filtrar planetas por gravedad
  document.getElementById("filtrarPlanetas").addEventListener("click", () => {
      const gravedad = parseFloat(document.getElementById("gravedadLimite").value);
      const tipo = parseInt(document.getElementById("tipoFiltro").value);

      if (!isNaN(gravedad)) {
          const filtrados = planetas.filter((p) =>
              tipo === 1 ? p.gravedad > gravedad : p.gravedad < gravedad
          );

          resultadoDiv.textContent = filtrados.length
              ? `Planetas filtrados: ${filtrados.map((p) => p.nombre).join(", ")}`
              : "No se encontraron planetas.";
      } else {
          resultadoDiv.textContent = "Introduce un valor de gravedad válido.";
      }
  });

  // Recuperar peso del Local Storage si existe
  const pesoGuardado = localStorage.getItem("pesoUsuario");
  if (pesoGuardado) {
      pesoInput.value = pesoGuardado;
  }

  // Guardar peso en Local Storage cuando se ingrese
  pesoInput.addEventListener("input", () => {
      localStorage.setItem("pesoUsuario", pesoInput.value);
  });
});
// Función para limpiar todos los campos
document.getElementById('limpiarCampos').addEventListener('click', function() {
    // Limpia el campo de peso
    document.getElementById('peso').value = '';
    // Limpia el campo de buscar nombre
    document.getElementById('buscarNombre').value = '';
    // Limpia el campo de gravedad límite
    document.getElementById('gravedadLimite').value = '';
    // Restablece la selección de planetas
    document.getElementById('planetaSelect').selectedIndex = 0;
    // Restablece la selección de tipo de filtro
    document.getElementById('tipoFiltro').selectedIndex = 0;
    // Limpia el div de resultado
    document.getElementById('resultado').innerHTML = '';
    // Mostrar un mensaje de agradecimiento o confirmación
    Toastify({
      text: "¡Listo para otra acción!",
      duration: 3000,
      gravity: "top",
      position: 'center',
      backgroundColor: "#28a745",
    }).showToast();
  });

