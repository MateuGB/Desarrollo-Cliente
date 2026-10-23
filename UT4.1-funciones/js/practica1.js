// Práctica 1: eliminar palabras repetidas y ordenarlas en español de la Z a la A

// Un Set no admite valores repetidos, así que al convertirlo de nuevo en array quedan solo las únicas
const eliminarRepetidas = (palabras) => [...new Set(palabras)];

// localeCompare con "es" ordena según el español (la ñ va después de la n, acentos, etc.).
// Comparando b con a en vez de a con b conseguimos el orden inverso.
const ordenarInverso = (palabras) => [...palabras].sort((a, b) => b.localeCompare(a, "es"));

document.getElementById("empezar").addEventListener("click", () => {
  const palabras = pedirPalabras();
  const resultado = ordenarInverso(eliminarRepetidas(palabras));

  const lista = resultado.map((palabra) => `<li>${escaparHtml(palabra)}</li>`).join("");
  mostrarResultado(palabras, `<p><strong>Sin repetidas y ordenadas de la Z a la A:</strong></p><ol>${lista}</ol>`);
});
