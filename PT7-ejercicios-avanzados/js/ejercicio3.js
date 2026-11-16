// Ejercicio 3: promesa que se resuelve o se rechaza según el parámetro

function simulaProceso(exito) {
  return new Promise(function (resolve, reject) {
    if (exito) {
      resolve("Proceso exitoso"); // la promesa se cumple
    } else {
      reject("Hubo un error"); // la promesa falla
    }
  });
}

// Forma 1: then-catch
// then recibe el resultado si va bien y catch el motivo si falla
function probarConThen(exito) {
  return simulaProceso(exito)
    .then(function (mensaje) {
      log("then-catch (" + exito + "):", mensaje);
    })
    .catch(function (error) {
      logError("then-catch (" + exito + "):", error);
    });
}

// Forma 2: async-await
// await espera a la promesa. Si se rechaza, salta al catch como un error normal
async function probarConAwait(exito) {
  try {
    const mensaje = await simulaProceso(exito);
    log("async-await (" + exito + "):", mensaje);
  } catch (error) {
    logError("async-await (" + exito + "):", error);
  }
}

// Hacemos las cuatro pruebas una detrás de otra para que salgan en orden
async function pruebas() {
  await probarConThen(true);
  await probarConThen(false);
  await probarConAwait(true);
  await probarConAwait(false);
}

pruebas();
