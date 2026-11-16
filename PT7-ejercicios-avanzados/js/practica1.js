// Práctica 1: contador de visitas guardado en una cookie que caduca en un mes

const parrafoVisitas = document.getElementById("visitas");
const aviso = document.getElementById("aviso");

// Leemos la cookie. Si no existe, es que todavía no hay visitas
const guardadas = leerCookie("visitas");
let visitas = guardadas === null ? 0 : Number(guardadas);

// Esta carga de la página cuenta como una visita más
visitas++;

if (visitas > 10) {
  // Más de 10 visitas: contador a cero y se borra la cookie
  visitas = 0;
  borrarCookie("visitas");
  aviso.textContent = "Has pasado de 10 visitas: contador a cero y cookie borrada.";
} else {
  // Guardamos el nuevo valor. La cookie caduca en un mes (30 días)
  guardarCookie("visitas", visitas, 30);
}

parrafoVisitas.textContent = "Número de visitas: " + visitas;
