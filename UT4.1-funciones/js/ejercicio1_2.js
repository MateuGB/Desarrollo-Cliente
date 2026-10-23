// 1.2 Función anónima autoinvocada (IIFE) que define la variable contador.
// La IIFE se ejecuta una sola vez y devuelve una función interna (closure) que
// sigue teniendo acceso a contador, así se incrementa en cada invocación.
const incrementar = (function () {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
})();

log("Primera invocación, contador =", incrementar());
log("Segunda invocación, contador =", incrementar());
log("Tercera invocación, contador =", incrementar());

// Intentamos acceder a contador fuera de la función
try {
  log("Fuera de la función, contador =", contador);
} catch (error) {
  logError("Error al acceder a contador fuera de la función:", error.name + ": " + error.message);
  log("contador solo existe dentro del ámbito de la función autoinvocada, desde fuera no es accesible.");
}
