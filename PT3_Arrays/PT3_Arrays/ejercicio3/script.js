// Map con nombres como claves y edades como valores
let edades = new Map();

// Agregar algunos nombres y edades
edades.set("Nacho", 40);
edades.set("Ana", 35);
edades.set("Mario", 15);
edades.set("Laura", 17);

// Actualizar la edad de uno de ellos (set sobre una clave existente la sobrescribe)
edades.set("Mario", 16);

// Imprimir todos los nombres con sus edades
let texto = "";
for (let [nombre, edad] of edades) {
    console.log(nombre + ": " + edad + " años");
    texto += nombre + ": " + edad + " años\n";
}

document.getElementById("salida").textContent = texto;
