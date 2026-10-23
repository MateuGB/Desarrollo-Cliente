// Práctica 2: contar cuántas veces aparece cada palabra usando un Map

// Recibe todas las palabras y devuelve un Map con clave = palabra y valor = número de apariciones
function contarPalabras(palabras) {
  const contador = new Map();

  palabras.forEach((palabra) => {
    contador.set(palabra, (contador.get(palabra) || 0) + 1);
  });

  return contador;
}

document.getElementById("empezar").addEventListener("click", () => {
  const palabras = pedirPalabras();
  const mapa = contarPalabras(palabras);

  let filas = "";
  for (const [palabra, veces] of mapa) {
    filas += `<tr><td>${escaparHtml(palabra)}</td><td>${veces}</td></tr>`;
  }

  console.log(mapa);
  mostrarResultado(
    palabras,
    `<table><thead><tr><th>Palabra</th><th>Veces</th></tr></thead><tbody>${filas}</tbody></table>`
  );
});
