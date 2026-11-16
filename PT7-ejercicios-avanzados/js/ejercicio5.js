// Ejercicio 5: tres promesas encadenadas con then

// Devuelve una promesa con el valor 10
function primeraTarea() {
  return new Promise(function (resolve) {
    resolve(10);
  });
}

// Recibe el valor de la primera tarea y lo multiplica por 2
function segundaTarea(valor) {
  return new Promise(function (resolve) {
    resolve(valor * 2);
  });
}

// Recibe el valor de la segunda tarea y le suma 5
function terceraTarea(valor) {
  return new Promise(function (resolve) {
    resolve(valor + 5);
  });
}

// Cada then recibe el resultado de la promesa anterior:
// 10 -> 10 * 2 = 20 -> 20 + 5 = 25
primeraTarea()
  .then(segundaTarea)
  .then(terceraTarea)
  .then(function (resultado) {
    log("Resultado final:", resultado);
  });
