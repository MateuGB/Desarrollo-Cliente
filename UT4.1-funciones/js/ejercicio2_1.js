// 2.1 Suma de los números de un array de forma iterativa y recursiva
const numeros = [3, 8, 1, 12, 5, 7];

// Versión iterativa: un bucle que va acumulando la suma
function sumaIterativa(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

// Versión recursiva: la suma es el elemento actual más la suma del resto
function sumaRecursiva(array, indice = 0) {
  if (indice >= array.length) {
    return 0; // caso base: no quedan elementos
  }
  return array[indice] + sumaRecursiva(array, indice + 1);
}

log("Array:", numeros);
log("Suma iterativa:", sumaIterativa(numeros));
log("Suma recursiva:", sumaRecursiva(numeros));

log("¿Qué solución es mejor?");
log(
  "La iterativa: es más eficiente porque no crea una llamada nueva en la pila por cada elemento " +
  "y no tiene riesgo de desbordar la pila (RangeError: Maximum call stack size exceeded) con arrays muy grandes. " +
  "La recursiva es elegante, pero para recorrer un array es mejor usar un bucle."
);

// Demostración: con un array enorme la recursiva desborda la pila y la iterativa no
const enorme = new Array(200000).fill(1);
log("Array de 200000 unos -> suma iterativa:", sumaIterativa(enorme));
try {
  log("Array de 200000 unos -> suma recursiva:", sumaRecursiva(enorme));
} catch (error) {
  logError("Array de 200000 unos -> suma recursiva: " + error.name + ": " + error.message);
}
