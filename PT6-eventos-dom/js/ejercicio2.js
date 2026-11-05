// Ejercicio 2: mostrar la posición del ratón con el objeto event

const parrafo = document.getElementById("posicion");

// El evento mousemove salta cada vez que se mueve el ratón.
// El navegador le pasa a la función el objeto event con la información del evento.
document.addEventListener("mousemove", function (event) {
  // clientX y clientY: posición del ratón dentro de la ventana (en píxeles)
  const x = event.clientX;
  const y = event.clientY;

  parrafo.textContent = "Posición del ratón -> X: " + x + "  Y: " + y;
});
