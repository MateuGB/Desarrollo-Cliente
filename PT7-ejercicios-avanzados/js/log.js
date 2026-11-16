// Muestra los mensajes en la consola y también en la página (en el div #salida)
function log(...args) {
  console.log(...args);
  escribirEnPagina(args, "");
}

function logError(...args) {
  console.error(...args);
  escribirEnPagina(args, "error");
}

function escribirEnPagina(args, clase) {
  const salida = document.getElementById("salida");
  if (!salida) return;
  const linea = document.createElement("p");
  linea.className = clase;
  linea.textContent = args
    .map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a)))
    .join(" ");
  salida.appendChild(linea);
}
