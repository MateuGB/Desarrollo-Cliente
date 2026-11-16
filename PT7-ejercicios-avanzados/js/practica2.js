// Práctica 2: temporizador que devuelve una promesa

function temporizador(milisegundos) {
  return new Promise(function (resolve, reject) {
    // Si pasa el doble de tiempo y la promesa no se ha cumplido, se rechaza
    const limite = setTimeout(function () {
      reject("El tiempo no va bien");
    }, milisegundos * 2);

    // Cuando pasa el tiempo indicado, la promesa se cumple
    setTimeout(function () {
      clearTimeout(limite); // ya no hace falta el temporizador del límite
      resolve("Tiempo concluido");
    }, milisegundos);
  });
}

// Programa principal: llamamos a la función con 5 segundos
const texto = document.getElementById("texto");

temporizador(5000)
  .then(function (mensaje) {
    texto.textContent = mensaje;
  })
  .catch(function (error) {
    texto.textContent = error;
  });
