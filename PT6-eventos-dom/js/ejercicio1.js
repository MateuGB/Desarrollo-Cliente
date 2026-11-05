// Ejercicio 1: al pulsar el botón se añade un número aleatorio a la lista

const boton = document.getElementById("btnNuevo");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
  // Número aleatorio entre 1 y 100
  const numero = Math.floor(Math.random() * 100) + 1;

  // Creamos el <li>, le ponemos el número y lo añadimos al <ul>
  const elemento = document.createElement("li");
  elemento.textContent = numero;
  lista.appendChild(elemento);
});
