// Array con números, algunos repetidos
let valores = [3, 7, 1, 3, 9, 7, 2, 1, 5, 9, 3, 8];

// El Set elimina automáticamente los duplicados.
// Con el operador spread (...) lo volvemos a convertir en array.
let unicos = [...new Set(valores)];

console.log("Valores originales:", valores);
console.log("Valores únicos:", unicos);

document.getElementById("salida").textContent =
    "Valores originales: " + valores.join(", ") + "\n" +
    "Valores únicos: " + unicos.join(", ");
