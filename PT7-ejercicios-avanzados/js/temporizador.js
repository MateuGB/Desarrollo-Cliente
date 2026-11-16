// Módulo temporizador (práctica 3): exporta las funciones temporizador y cuenta

// La misma función de la práctica 2: promesa que se cumple al pasar el tiempo
export function temporizador(milisegundos) {
  return new Promise(function (resolve, reject) {
    // Si pasa el doble de tiempo y la promesa no se ha cumplido, se rechaza
    const limite = setTimeout(function () {
      reject("El tiempo no va bien");
    }, milisegundos * 2);

    // Cuando pasa el tiempo indicado, la promesa se cumple
    setTimeout(function () {
      clearTimeout(limite);
      resolve("Tiempo concluido");
    }, milisegundos);
  });
}

// Escribe una cuenta atrás en un elemento HTML.
// - inicio: número con el que empieza la cuenta
// - elemento: dónde se escribe (por defecto, el body)
// - intervalo: milisegundos entre número y número (por defecto, 1 segundo)
// - callback: función que se ejecuta cuando la cuenta termina
export async function cuenta(inicio, elemento = document.body, intervalo = 1000, callback) {
  for (let numero = inicio; numero >= 0; numero--) {
    elemento.textContent = numero;

    // Esperamos antes de pasar al siguiente número (después del 0 ya no se espera)
    if (numero > 0) {
      await temporizador(intervalo);
    }
  }

  // El callback es opcional: solo se llama si nos han pasado una función
  if (typeof callback === "function") {
    callback();
  }
}
