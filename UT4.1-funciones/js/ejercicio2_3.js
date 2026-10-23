// 2.3 filter(), map() y reduce(): mayores de 18, edad x2 y suma de todas las edades
const personas = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 19 },
  { nombre: "Laura", edad: 16 },
];

const mayores = personas.filter((persona) => persona.edad > 18);
log("Mayores de 18:", mayores);

const edadesDobles = mayores.map((persona) => persona.edad * 2);
log("Sus edades multiplicadas por 2:", edadesDobles);

const suma = edadesDobles.reduce((acumulado, edad) => acumulado + edad, 0);
log("Suma de las edades:", suma);

// Lo mismo encadenando los tres métodos
const sumaEncadenada = personas
  .filter((persona) => persona.edad > 18)
  .map((persona) => persona.edad * 2)
  .reduce((acumulado, edad) => acumulado + edad, 0);
log("Resultado encadenando filter().map().reduce():", sumaEncadenada);
