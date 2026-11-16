// Ejercicio 4: importamos las funciones del módulo calculadora y las probamos

import { suma, resta, multiplica, divide } from "./calculadora.js";

log("suma(8, 4) =", suma(8, 4));
log("resta(8, 4) =", resta(8, 4));
log("multiplica(8, 4) =", multiplica(8, 4));
log("divide(8, 4) =", divide(8, 4));

// divide lanza un error si el segundo número es 0
try {
  log("divide(8, 0) =", divide(8, 0));
} catch (error) {
  logError("divide(8, 0):", error.message);
}
