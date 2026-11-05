// Práctica 3 (opcional): arrastrar la capa 1 y soltarla en la capa 2

const capa1 = document.getElementById("capa1");
const capa2 = document.getElementById("capa2");

// ---- Eventos de la capa que se arrastra ----

// dragstart: empieza el arrastre -> la capa 1 al 50% de opacidad
capa1.addEventListener("dragstart", function () {
  capa1.style.opacity = "0.5";
});

// dragend: termina el arrastre (se suelte donde se suelte) -> opacidad normal
capa1.addEventListener("dragend", function () {
  capa1.style.opacity = "1";
});

// ---- Eventos de la capa destino ----

// dragover: se arrastra algo por encima del destino.
// preventDefault es obligatorio para que se permita soltar (drop).
capa2.addEventListener("dragover", function (event) {
  event.preventDefault();
  capa2.style.backgroundColor = "red";
});

// dragleave: se sale del destino sin soltar -> vuelve a blanco
capa2.addEventListener("dragleave", function () {
  capa2.style.backgroundColor = "white";
});

// drop: se suelta la capa 1 dentro del destino
capa2.addEventListener("drop", function (event) {
  event.preventDefault();
  capa1.style.display = "none"; // la primera desaparece
  capa2.style.backgroundColor = "white";
  capa2.textContent = "Lo has logrado";
});
