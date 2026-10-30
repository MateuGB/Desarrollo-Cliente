// Práctica 1: objetos que representan rectángulos creados con una función constructora

// Devuelve el valor si es un número mayor que 0, si no devuelve 1 (valor por defecto)
function validarDimension(valor) {
  return typeof valor === "number" && valor > 0 ? valor : 1;
}

// Función constructora: recibe ancho y alto
function Rectangulo(width, height) {
  this.width = validarDimension(width);
  this.height = validarDimension(height);
}

// Los métodos se ponen en el prototipo para que todos los rectángulos los compartan
Rectangulo.prototype.cambiarDimensiones = function (width, height) {
  this.width = validarDimension(width);
  this.height = validarDimension(height);
};

Rectangulo.prototype.calcularArea = function () {
  return this.width * this.height;
};

// Devuelve un objeto nuevo con las mismas dimensiones (no la misma referencia)
Rectangulo.prototype.copia = function () {
  return new Rectangulo(this.width, this.height);
};

Rectangulo.prototype.comparar = function (otro) {
  const areaActual = this.calcularArea();
  const areaOtro = otro.calcularArea();

  if (areaActual > areaOtro) return "mayor";
  if (areaActual < areaOtro) return "menor";
  return "igual";
};

const describir = (r) => `${r.width} x ${r.height} (área ${r.calcularArea()})`;

// ---- Pruebas ----

log("1. Crear rectángulos");
const r1 = new Rectangulo(4, 5);
log("new Rectangulo(4, 5) ->", describir(r1));

const r2 = new Rectangulo(-3, 0);
log("new Rectangulo(-3, 0) ->", describir(r2), "(los valores <= 0 pasan a 1)");

const r3 = new Rectangulo(6, -2);
log("new Rectangulo(6, -2) ->", describir(r3));

log("2. cambiarDimensiones");
r2.cambiarDimensiones(2, 10);
log("r2.cambiarDimensiones(2, 10) ->", describir(r2));
r2.cambiarDimensiones(0, 7);
log("r2.cambiarDimensiones(0, 7) ->", describir(r2), "(el 0 pasa a 1)");

log("3. calcularArea");
log("r1.calcularArea() ->", r1.calcularArea());

log("4. copia");
const copiaR1 = r1.copia();
log("copiaR1 = r1.copia() ->", describir(copiaR1));
log("¿copiaR1 === r1?", copiaR1 === r1, "(es un objeto distinto)");
copiaR1.cambiarDimensiones(1, 1);
log("Tras cambiar la copia a 1 x 1, r1 sigue siendo:", describir(r1));

log("5. comparar");
const grande = new Rectangulo(10, 10);
const pequeno = new Rectangulo(2, 3);
const igual = new Rectangulo(5, 4);
log(`r1 (${describir(r1)}) comparado con ${describir(grande)} ->`, r1.comparar(grande));
log(`r1 (${describir(r1)}) comparado con ${describir(pequeno)} ->`, r1.comparar(pequeno));
log(`r1 (${describir(r1)}) comparado con ${describir(igual)} ->`, r1.comparar(igual));
