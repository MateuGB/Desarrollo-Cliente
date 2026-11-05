// Práctica 2: validar email y password cuando el campo pierde el foco (blur)

const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const botonEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

// Formato xxxx@yyyy.zzzz: texto, @, texto, punto y texto (sin espacios)
function emailValido() {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email.value);
}

// Password: entre 8 y 10 caracteres
function passwordValido() {
  const largo = password.value.length;
  return largo >= 8 && largo <= 10;
}

// El botón solo se activa si los dos campos son correctos.
// Con disabled el botón se ve gris y no se puede pulsar.
function actualizarBoton() {
  botonEnviar.disabled = !(emailValido() && passwordValido());
}

// blur: salta cuando el campo pierde el foco
email.addEventListener("blur", function () {
  if (!emailValido()) {
    errorEmail.textContent = "Formato esperado: xxxx@yyyy.zzzz";
  }
  actualizarBoton();
});

password.addEventListener("blur", function () {
  if (!passwordValido()) {
    errorPassword.textContent = "Debe tener entre 8 y 10 caracteres";
  }
  actualizarBoton();
});

// focus: cuando el usuario vuelve a entrar en el campo se borra el error
email.addEventListener("focus", function () {
  errorEmail.textContent = "";
});

password.addEventListener("focus", function () {
  errorPassword.textContent = "";
});

// Por seguridad, también comprobamos al enviar
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // no hay servidor, así que no recargamos la página
  if (emailValido() && passwordValido()) {
    mensaje.textContent = "Formulario enviado correctamente";
  }
});
