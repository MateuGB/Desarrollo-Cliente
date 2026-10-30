// Práctica 2: tipo Ordenador y tipo Portatil que hereda de Ordenador

// Función constructora de Ordenador. Marca y modelo son obligatorios,
// el resto tiene valores por defecto: 17 pulgadas, 512 GB de disco y 4 GB de RAM
function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
  if (!marca || !modelo) {
    throw new Error("La marca y el modelo son obligatorios");
  }
  this.marca = marca;
  this.modelo = modelo;
  this.ram = ram;
  this.disco = disco;
  this.pulgadas = pulgadas;
}

Ordenador.prototype.toString = function () {
  return `${this.marca} ${this.modelo} - RAM: ${this.ram} GB, disco duro: ${this.disco} GB, pantalla: ${this.pulgadas}"`;
};

// Función constructora de Portatil: igual que Ordenador más la autonomía.
// Valores por defecto: 4 GB de RAM, 256 GB de disco, 12 pulgadas y 4 horas de autonomía
function Portatil(marca, modelo, ram = 4, disco = 256, pulgadas = 12, autonomia = 4) {
  // Llamamos al constructor de Ordenador para que inicialice las propiedades comunes
  Ordenador.call(this, marca, modelo, ram, disco, pulgadas);
  this.autonomia = autonomia;
}

// Herencia: el prototipo de Portatil se crea a partir del de Ordenador
Portatil.prototype = Object.create(Ordenador.prototype);
Portatil.prototype.constructor = Portatil;

// Sobrescribimos toString reutilizando el de Ordenador y añadiendo la autonomía
Portatil.prototype.toString = function () {
  return `${Ordenador.prototype.toString.call(this)}, autonomía: ${this.autonomia} horas`;
};

// ---- Pruebas ----

log("1. Ordenadores");
const o1 = new Ordenador("HP", "EliteDesk 800");
log("new Ordenador('HP', 'EliteDesk 800') ->", o1.toString(), "(valores por defecto)");

const o2 = new Ordenador("Dell", "OptiPlex 7090", 16, 1024, 24);
log("new Ordenador('Dell', 'OptiPlex 7090', 16, 1024, 24) ->", o2.toString());

// Al concatenar con un texto, JavaScript llama solo a toString()
log("Concatenado con texto: " + o1);

try {
  new Ordenador("Lenovo");
} catch (error) {
  logError("new Ordenador('Lenovo') sin modelo ->", error.message);
}

log("2. Portátiles");
const p1 = new Portatil("Asus", "ZenBook 14");
log("new Portatil('Asus', 'ZenBook 14') ->", p1.toString(), "(valores por defecto)");

const p2 = new Portatil("Apple", "MacBook Pro", 16, 512, 14, 18);
log("new Portatil('Apple', 'MacBook Pro', 16, 512, 14, 18) ->", p2.toString());

try {
  new Portatil();
} catch (error) {
  logError("new Portatil() sin marca ni modelo ->", error.message);
}

log("3. Comprobar la herencia");
log("p1 instanceof Portatil:", p1 instanceof Portatil);
log("p1 instanceof Ordenador:", p1 instanceof Ordenador, "(un portátil también es un ordenador)");
log("o1 instanceof Portatil:", o1 instanceof Portatil);
log("p1.constructor.name:", p1.constructor.name);
log("o1 tiene autonomía:", "autonomia" in o1, "| p1 tiene autonomía:", "autonomia" in p1);
