const NUM_COMBINACIONES = 50;
const NUMEROS_POR_COMBINACION = 6;
const MAXIMO = 49;

// Genera una combinación de 6 números distintos entre 1 y 49
function generarCombinacion() {
    // Un Set no admite repetidos, así que seguimos sacando números
    // hasta tener 6 distintos
    let numeros = new Set();
    while (numeros.size < NUMEROS_POR_COMBINACION) {
        let numero = Math.floor(Math.random() * MAXIMO) + 1;
        numeros.add(numero);
    }
    // Se devuelve como array ordenado de menor a mayor
    return [...numeros].sort((a, b) => a - b);
}

let texto = "";
for (let i = 1; i <= NUM_COMBINACIONES; i++) {
    let combinacion = generarCombinacion();
    console.log("Combinación " + i + ": " + combinacion.join(" - "));
    texto += "Combinación " + i + ": " + combinacion.join(" - ") + "\n";
}

document.getElementById("salida").textContent = texto;
