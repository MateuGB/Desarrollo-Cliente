// Práctica 3: función filtro propia que aplica un callback a cada elemento del array.
// El resultado se guarda en el mismo array (se modifica el original).
function filtro(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  return array;
}

// Caso 1: multiplicar por 2
const numeros = [1, 2, 3, 4];
log("Caso 1 - Multiplicar por 2");
log("Array original:", numeros);
filtro(numeros, (n) => n * 2);
log("Resultado:", numeros);

// Caso 2: pasar palabras en minúsculas a mayúsculas
const palabras = ["hola", "mundo", "javascript", "función", "año"];
log("Caso 2 - Pasar a mayúsculas");
log("Array original:", palabras);
filtro(palabras, (palabra) => palabra.toUpperCase());
log("Resultado:", palabras);

// Caso 3: calcular el factorial de cada número (n! = n · (n-1) · ... · 1, y 0! = 1)
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const valores = [0, 1, 3, 5, 7, 10];
log("Caso 3 - Factorial");
log("Array original:", valores);
filtro(valores, factorial);
log("Resultado:", valores);
