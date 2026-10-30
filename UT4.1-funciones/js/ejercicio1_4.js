// 1.4 Función flecha asignada a una variable: devuelve true si el número es par
const esPar = (numero) => numero % 2 === 0;

const pruebas = [0, 1, 2, 7, 10, -3, -4];
pruebas.forEach((n) => log(`esPar(${n}) =`, esPar(n)));
