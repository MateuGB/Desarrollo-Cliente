// Muestra un mensaje por consola y también en la página
function mostrar(titulo, valor) {
    // Se guarda una copia para que la consola muestre el estado de ese momento
    const copia = JSON.parse(JSON.stringify(valor));
    console.log(titulo, copia);
    document.getElementById("salida").textContent +=
        titulo + "\n" + JSON.stringify(copia, null, 2) + "\n\n";
}

// Array inicial
let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 }
];

// a) Añadir dos elementos al final
data.push(
    { name: "Pedro", telephone: "611944444", age: 25 },
    { name: "Julia", phone: "633232323", age: 37 }
);

// b) Comprobar que se han añadido
console.log(data);
mostrar("Array con los nuevos elementos:", data);

// c) Ordenar por edad (de menor a mayor)
data.sort((a, b) => a.age - b.age);
mostrar("Ordenado por edad:", data);

// d) Ordenar por nombre (alfabéticamente)
data.sort((a, b) => a.name.localeCompare(b.name));
mostrar("Ordenado por nombre:", data);

// e) Nuevo vector solo con los mayores de 30 años
let mayores30 = data.filter(persona => persona.age > 30);
mostrar("Mayores de 30 años:", mayores30);
