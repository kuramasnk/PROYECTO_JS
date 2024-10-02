// Definir planetas con gravedad y nombres
const planetas = [
    { id: 1, nombre: "Marte", gravedad: 3.7 },
    { id: 2, nombre: "Júpiter", gravedad: 24.8 },
    { id: 3, nombre: "Cripton", gravedad: 75.8 }
  ];
  
  // Solicitar peso del usuario
  const pesoUsuario = parseFloat(prompt("Introduce tu peso:"));
  
  // Definir las acciones posibles
  const acciones = `
  Elige una opción:
  1. Calcular peso en un planeta.
  2. Buscar planeta por nombre.
  3. Filtrar planetas por gravedad.
  0. Salir.
  `;
  
  while (true) {
    const opcion = parseInt(prompt(acciones));  // Solicitar opción del usuario
    
    if (opcion === 0) break;  // Salir si se elige la opción 0
  
    switch (opcion) {
      case 1:
        // Calcular peso en otro planeta
        const id = parseInt(prompt("Elige el planeta: 1 para Marte, 2 para Júpiter, 3 para Cripton"));
        const planeta = planetas.find(p => p.id === id);
        if (planeta) {
          alert(`Tu peso en ${planeta.nombre} es ${(pesoUsuario * planeta.gravedad / 9.8).toFixed(2)} kilos`);
        } else {
          alert("Planeta no encontrado.");
        }
        break;
  
      case 2:
        // Buscar planeta por nombre
        const nombre = prompt("Introduce el nombre del planeta:").toLowerCase();
        const encontrado = planetas.find(p => p.nombre.toLowerCase() === nombre);
        encontrado ? alert(`Planeta encontrado: ${encontrado.nombre} con gravedad ${encontrado.gravedad}.`) : alert("Planeta no encontrado.");
        break;
  
      case 3:
        // Filtrar planetas por gravedad
        const gravedad = parseFloat(prompt("Introduce el valor de gravedad límite:"));
        const tipo = parseInt(prompt("1 para mayor a límite, 2 para menor a límite"));
        const filtrados = planetas.filter(p => tipo === 1 ? p.gravedad > gravedad : p.gravedad < gravedad);
        alert(filtrados.length ? `Planetas filtrados: ${filtrados.map(p => p.nombre).join(", ")}` : "No se encontraron planetas.");
        break;
  
      default:
        // Manejo de opción inválida
        alert("Opción no válida.");
    }
  }
  