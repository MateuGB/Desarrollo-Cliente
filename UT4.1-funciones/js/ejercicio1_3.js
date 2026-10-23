// 1.3 Función autoinvocada que recibe una cadena y un número y los concatena
(function (texto, numero) {
  const resultado = texto + numero;
  log("Resultado de concatenar:", resultado);
})("El número es: ", 42);
