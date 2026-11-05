// Ejercicio 3: ocultar con clic, eliminar con clic derecho y reaparecer con un botón

const parrafos = document.querySelectorAll(".parrafo");
const botonReaparecer = document.getElementById("btnReaparecer");

parrafos.forEach(function (p) {
  // Clic izquierdo: se oculta (sigue en el DOM, solo no se ve)
  p.addEventListener("click", function () {
    p.style.display = "none";
  });

  // Clic derecho: se elimina del DOM
  p.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // evita que salga el menú del navegador
    p.remove();
  });
});

// Reaparecer: vuelve a mostrar los párrafos que quedan en la página.
// Los eliminados ya no existen en el DOM, así que no vuelven.
botonReaparecer.addEventListener("click", function () {
  const quedan = document.querySelectorAll(".parrafo");
  quedan.forEach(function (p) {
    p.style.display = "";
  });
});
