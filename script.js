// Función para calcular el peso en un planeta dado
function calcularPesoEnPlaneta(peso, gravedadPlaneta) {
  return (peso * gravedadPlaneta) / 9.8;
}

// Definir las gravidades y nombres de los planetas
const planetas = {
  1: { nombre: "Marte", gravedad: 3.7 },
  2: { nombre: "Júpiter", gravedad: 24.8 },
  3: { nombre: "Cripton", gravedad: 75.8 }
};

// Función para mostrar el peso en un planeta
function mostrarPesoEnPlaneta(planeta, peso) {
  const infoPlaneta = planetas[planeta];
  
  if (infoPlaneta) {
    const pesoFinal = calcularPesoEnPlaneta(peso, infoPlaneta.gravedad).toFixed(2);
    document.write(`Tu peso en ${infoPlaneta.nombre} es <strong>${pesoFinal} kilos</strong><br>`);
  } else {
    document.write("Planeta no reconocido. Por favor elige un planeta válido.<br>");
  }
}

// Solicitar el peso del usuario
const peso = parseFloat(prompt("¿Cuál es tu peso?"));

// Bucle para permitir al usuario calcular su peso en múltiples planetas
while (true) {
  const planeta = parseInt(prompt("Elige tu planeta: 1 es Marte, 2 es Júpiter, 3 es Cripton. 0 Finalizar."));
  
  if (planeta === 0) {
    break; 
  } else if (planetas[planeta]) {
    mostrarPesoEnPlaneta(planeta, peso);
  } else {
    alert("Opción no válida. Por favor elige 1, 2 o 3.");
  }
}
