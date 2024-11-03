// Cargar datos de planetas desde un archivo JSON y almacenar en Local Storage
function cargarPlanetas() {
    return fetch('/json/planetas.json')
        .then(function (response) { // Cambia 'planetas.json' si es necesario
            if (!response.ok) throw new Error("Error al cargar los datos");
            return response.json();
        })
        .then(function (data) {
            localStorage.setItem('planetas', JSON.stringify(data)); // Almacena los planetas en Local Storage
        })
        .catch(function (error) {
            console.error(error); // Manejar errores de carga
        });
}

// Cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    cargarPlanetas().then(function () {
        // Obtener los planetas del Local Storage
        var planetas = JSON.parse(localStorage.getItem('planetas')) || [];
        var pesoInput = document.getElementById("peso");
        var resultadoDiv = document.getElementById("resultado");

        // Calcular peso en el planeta seleccionado
        document.getElementById("calcularPeso").addEventListener("click", function () {
            var planetaId = parseInt(document.getElementById("planetaSelect").value);
            var planeta = planetas.find(function (p) { return p.id === planetaId });
            var pesoUsuario = parseFloat(pesoInput.value);

            if (planeta && !isNaN(pesoUsuario)) {
                var pesoFinal = ((pesoUsuario * planeta.gravedad) / 9.8).toFixed(2);
                resultadoDiv.textContent = "Tu peso en " + planeta.nombre + " es " + pesoFinal + " kilos.";
            } else {
                resultadoDiv.textContent = "Por favor, introduce un peso válido.";
            }
        });

        // Buscar un planeta por su nombre
        document.getElementById("buscarPlaneta").addEventListener("click", function () {
            var nombre = document.getElementById("buscarNombre").value.toLowerCase();
            var encontrado = planetas.find(function (p) { return p.nombre.toLowerCase() === nombre });

            resultadoDiv.textContent = encontrado ? "Planeta encontrado: " + encontrado.nombre + " con gravedad " + encontrado.gravedad + "." : "Planeta no encontrado."
        });

        // Filtrar planetas por gravedad
        document.getElementById("filtrarPlanetas").addEventListener("click", function () {
            var gravedad = parseFloat(document.getElementById("gravedadLimite").value);
            var tipo = parseInt(document.getElementById("tipoFiltro").value);

            if (!isNaN(gravedad)) {
                var filtrados = planetas.filter(function (p) {
                    return tipo === 1 ? p.gravedad > gravedad : p.gravedad < gravedad ;
                });

                resultadoDiv.textContent = filtrados.length ? "Planetas filtrados: " + filtrados.map(function (p) { return p.nombre; }).join(", ") : "No se encontraron planetas.";
            } else {
                resultadoDiv.textContent = "Introduce un valor de gravedad válido.";
            }
        });

        // Recuperar peso del Local Storage si existe
        var pesoGuardado = localStorage.getItem("pesoUsuario");
        if (pesoGuardado) {
            pesoInput.value = pesoGuardado;
        }

        // Guardar peso en Local Storage cuando se ingrese
        pesoInput.addEventListener("input", function () {
            localStorage.setItem("pesoUsuario", pesoInput.value);
        });
    });
    
    // Función para limpiar todos los campos
    document.getElementById('limpiarCampos').addEventListener('click', function () {
        document.getElementById('peso').value = '';
        document.getElementById('buscarNombre').value = '';
        document.getElementById('gravedadLimite').value = '';
        document.getElementById('planetaSelect').selectedIndex = 0;
        document.getElementById('tipoFiltro').selectedIndex = 0;
        document.getElementById('resultado').innerHTML = '';
        Toastify({
            text: "¡Listo para otra acción!",
            duration: 3000,
            gravity: "top",
            position: 'center',
            backgroundColor: "#28a745",
        }).showToast();
    });
});

