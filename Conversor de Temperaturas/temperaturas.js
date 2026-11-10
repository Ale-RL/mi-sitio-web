
// Obtenemos los elementos del HTML
const formulario = document.getElementById("formulario");
const temperatura = document.getElementById("temperatura");
const conversion = document.getElementById("conversion");
const resultado = document.getElementById("resultado");

// Función para realizar la conversión
formulario.addEventListener("submit", function(event) {

    // Evitamos que se recargue la página
    event.preventDefault();

    // Obtenemos la temperatura ingresada
    let valor = temperatura.value;

    // Validamos que el campo no esté vacío
    if (valor.trim() === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    // Convertimos el valor a número
    valor = parseFloat(valor);

    let temperaturaConvertida;
    let unidad;

    // Identificamos el tipo de conversión
    if (conversion.value === "celsius") {

        // Celsius a Fahrenheit
        temperaturaConvertida = (valor * 9 / 5) + 32;
        unidad = "°F";

    } else {

        // Fahrenheit a Celsius
        temperaturaConvertida = (valor - 32) * 5 / 9;
        unidad = "°C";

    }

    // Mostramos el resultado
    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Temperatura ingresada: ${valor}°</p>
        <p>Conversión: ${conversion.options[conversion.selectedIndex].text}</p>
        <h3>${temperaturaConvertida.toFixed(2)} ${unidad}</h3>
    `;

});
