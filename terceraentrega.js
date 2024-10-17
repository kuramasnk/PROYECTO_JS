const planetas = [
    { id: 1, nombre: "Marte", gravedad: 3.7 },
    { id: 2, nombre: "Júpiter", gravedad: 24.8 },
    { id: 3, nombre: "Cripton", gravedad: 75.8 }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const pesoInput = document.getElementById('peso');
    const opcionSelect = document.getElementById('opcion');
    const resultadoDiv = document.getElementById('resultado');
  
    const opcion1Div = document.getElementById('opcion1');
    const opcion2Div = document.getElementById('opcion2');
    const opcion3Div = document.getElementById('opcion3');
  
    opcionSelect.addEventListener('change', (e) => {
      mostrarOpcion(e.target.value);
    });
  
    function mostrarOpcion(opcion) {
      opcion1Div.style.display = opcion === "1" ? "block" : "none";
      opcion2Div.style.display = opcion === "2" ? "block" : "none";
      opcion3Div.style.display = opcion === "3" ? "block" : "none";
      resultadoDiv.textContent = "";
    }
  
    document.getElementById('calcularPeso').addEventListener('click', () => {
      const planetaId = parseInt(document.getElementById('planetaSelect').value);
      const planeta = planetas.find(p => p.id === planetaId);
      const pesoUsuario = parseFloat(pesoInput.value);
      
      if (planeta && !isNaN(pesoUsuario)) {
        const pesoFinal = (pesoUsuario * planeta.gravedad / 9.8).toFixed(2);
        resultadoDiv.textContent = `Tu peso en ${planeta.nombre} es ${pesoFinal} kilos.`;
      } else {
        resultadoDiv.textContent = "Por favor, introduce un peso válido.";
      }
    });
  
    document.getElementById('buscarPlaneta').addEventListener('click', () => {
      const nombre = document.getElementById('buscarNombre').value.toLowerCase();
      const encontrado = planetas.find(p => p.nombre.toLowerCase() === nombre);
  
      resultadoDiv.textContent = encontrado
        ? `Planeta encontrado: ${encontrado.nombre} con gravedad ${encontrado.gravedad}.`
        : "Planeta no encontrado.";
    });
  
    document.getElementById('filtrarPlanetas').addEventListener('click', () => {
      const gravedad = parseFloat(document.getElementById('gravedadLímite').value);
      const tipo = parseInt(document.getElementById('tipoFiltro').value);
      
      if (!isNaN(gravedad)) {
        const filtrados = planetas.filter(p =>
          tipo === 1 ? p.gravedad > gravedad : p.gravedad < gravedad
        );
  
        resultadoDiv.textContent = filtrados.length
          ? `Planetas filtrados: ${filtrados.map(p => p.nombre).join(", ")}`
          : "No se encontraron planetas.";
      } else {
        resultadoDiv.textContent = "Introduce un valor de gravedad válido.";
      }
    });
  });
  