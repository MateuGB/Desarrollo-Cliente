// Práctica 1: al pulsar ALT+F12 (o Ctrl+B) se pone una imagen aleatoria de fondo

const capa = document.getElementById("imagen");

// keydown salta al pulsar una tecla. El objeto event nos dice qué tecla
// es (event.key) y si se tenían pulsadas ALT (event.altKey) o Ctrl (event.ctrlKey).
document.addEventListener("keydown", function (event) {
  const altF12 = event.altKey && event.key === "F12";
  // Combinación alternativa por si el portátil tiene ALT+F12 reservada
  const ctrlB = event.ctrlKey && event.key.toLowerCase() === "b";

  if (altF12 || ctrlB) {
    event.preventDefault(); // que el navegador no haga su acción (p. ej. Ctrl+B = marcadores)

    // picsum devuelve una imagen aleatoria. Añadimos ?random=... con la hora
    // para que cada vez sea una URL distinta y cambie la imagen.
    const url = "https://picsum.photos/1920/1080?random=" + Date.now();
    capa.style.backgroundImage = "url('" + url + "')";
  }
});
