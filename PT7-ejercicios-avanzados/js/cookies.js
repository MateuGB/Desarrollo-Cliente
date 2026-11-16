// Funciones para trabajar con cookies. Las usan el ejercicio 1 y la práctica 1.

// Guarda una cookie que caduca dentro de los días indicados
function guardarCookie(nombre, valor, dias) {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + dias);
  // encodeURIComponent evita problemas con espacios, tildes, punto y coma...
  document.cookie =
    nombre + "=" + encodeURIComponent(valor) +
    "; expires=" + fecha.toUTCString() + "; path=/";
}

// Devuelve el valor de la cookie, o null si no existe
function leerCookie(nombre) {
  // document.cookie es un texto del tipo "a=1; b=2; c=3"
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const partes = cookie.split("=");
    if (partes[0] === nombre) {
      return decodeURIComponent(partes[1]);
    }
  }
  return null;
}

// Para borrar una cookie se le pone una fecha de caducidad ya pasada
function borrarCookie(nombre) {
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}
