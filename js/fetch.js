// Espera a que el DOM esté listo antes de añadir los eventos
document.addEventListener("DOMContentLoaded", function () {
    var botonInfoPlanetas = document.getElementById("infoPlanetas");
    var selectPlaneta = document.getElementById("planetaSelect");
    var contenedorResultados = document.getElementById("resultado");

    // Función para mostrar información del planeta
    function mostrarInfoPlaneta() {
        var planetaSeleccionado = selectPlaneta.options[selectPlaneta.selectedIndex].text;

        fetch('json/infoplanetas.json')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                // Filtra el planeta que se busca
                var planetaEncontrado = data.find(function (planeta) {
                    return planeta.nombre.toLowerCase() === planetaSeleccionado.toLowerCase();
                });

                // Limpia el contenedor de resultados
                contenedorResultados.innerHTML = '';

                if (planetaEncontrado) {
                    // Muestra la información del planeta encontrado
                    contenedorResultados.innerHTML = 
                        '<h2>' + planetaEncontrado.nombre + '</h2>' +
                        '<img src="' + planetaEncontrado.imagen + '" alt="' + planetaEncontrado.nombre + '" style="width:200px; height:auto;">' +
                        '<p><strong>Diámetro:</strong> ' + planetaEncontrado.diametro + '</p>' +
                        '<p><strong>Rotación:</strong> ' + planetaEncontrado.rotacion + '</p>' +
                        '<p><strong>Número de Satélites:</strong> ' + planetaEncontrado.satelites + '</p>' +
                        '<p><strong>Radio:</strong> ' + planetaEncontrado.radio + '</p>';
                } 
            })
            .catch(function (error) {
                console.error("Error al cargar la información de los planetas:", error);
                contenedorResultados.innerHTML = '<p>Hubo un problema al cargar la información. Intenta de nuevo más tarde.</p>';
            });
    }

    botonInfoPlanetas.addEventListener("click", mostrarInfoPlaneta);
});
