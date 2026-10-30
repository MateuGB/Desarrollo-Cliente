// Código común a las prácticas 1 y 2: pedir palabras y mostrar el resultado

// Pide palabras con prompt hasta que se deje vacío o se pulse Cancelar (devuelve null)
function pedirPalabras() {
  const palabras = [];
  let palabra = prompt("Introduce una palabra (déjalo vacío o pulsa Cancelar para terminar):");

  while (palabra !== null && palabra.trim() !== "") {
    palabras.push(palabra.trim());
    palabra = prompt("Introduce otra palabra (déjalo vacío o pulsa Cancelar para terminar):");
  }

  return palabras;
}

// Muestra en el div #resultado las palabras introducidas y el resultado procesado
function mostrarResultado(palabras, htmlResultado) {
  const resultado = document.getElementById("resultado");

  if (palabras.length === 0) {
    resultado.innerHTML = "<p>No se ha introducido ninguna palabra.</p>";
    return;
  }

  resultado.innerHTML = `
    <p><strong>Palabras introducidas:</strong> ${escaparHtml(palabras.join(", "))}</p>
    ${htmlResultado}
  `;
}

// Evita que lo que escribe el usuario se interprete como HTML
const escaparHtml = (texto) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
