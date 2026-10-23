// 2.2 Usar forEach() para incrementar en un 10% el precio de cada producto
const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

log("Antes:", productos);

productos.forEach((producto) => {
  // Redondeamos a 2 decimales para evitar resultados como 22.000000000000004
  producto.precio = Math.round(producto.precio * 1.1 * 100) / 100;
});

log("Después de subir un 10%:", productos);
