// Ejercicio 1: guardar el nombre en una cookie de 7 días y dar la bienvenida

const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("nombre");
const botonGuardar = document.getElementById("btnGuardar");
const error = document.getElementById("error");
const bienvenida = document.getElementById("bienvenida");
const mensaje = document.getElementById("mensaje");
const botonBorrar = document.getElementById("btnBorrar");

// Muestra el formulario o la bienvenida según exista o no la cookie
function mostrarPagina() {
  const nombre = leerCookie("nombre");

  if (nombre !== null) {
    mensaje.textContent = "¡Bienvenido/a, " + nombre + "!";
    formulario.hidden = true;
    bienvenida.hidden = false;
  } else {
    formulario.hidden = false;
    bienvenida.hidden = true;
  }
}

botonGuardar.addEventListener("click", function () {
  const nombre = campoNombre.value.trim();

  // No guardamos la cookie si el campo está vacío
  if (nombre === "") {
    error.textContent = "Escribe tu nombre";
    return;
  }

  error.textContent = "";
  guardarCookie("nombre", nombre, 7);
  mostrarPagina();
});

// Botón extra para poder probar el ejercicio otra vez
botonBorrar.addEventListener("click", function () {
  borrarCookie("nombre");
  campoNombre.value = "";
  mostrarPagina();
});

// Al cargar la página comprobamos si ya existe la cookie
mostrarPagina();
