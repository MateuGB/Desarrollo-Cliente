// Ejercicio 2: función divide que lanza un error si se divide por cero

function divide(a, b) {
  if (b === 0) {
    // throw corta la función y manda el error al catch más cercano
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Prueba 1: división normal
try {
  log("divide(10, 2) =", divide(10, 2));
} catch (error) {
  logError("Ha ocurrido un error:", error.message);
}

// Prueba 2: división por cero, salta al catch
try {
  log("divide(8, 0) =", divide(8, 0));
} catch (error) {
  logError("Ha ocurrido un error:", error.message);
}

// El programa sigue funcionando porque el error se ha capturado
log("Fin del programa");
