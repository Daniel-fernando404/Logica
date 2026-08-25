/*
Escenario:
Estás programando el cierre de caja de una tienda durante la venta de 5 productos consecutivos (identificados del 1 al 5).

Reglas de negocio:

El sistema procesa los 5 productos uno por uno.

Cada producto tiene un precio base que arranca en $10 en el producto 1, y aumenta $10 más en cada nuevo producto vendido ($10, $20, $30, etc.).

Si el precio del producto es mayor o igual a $30, se considera una "Venta Premium" y debe imprimir: "Producto [ID]: Venta Premium de $[PRECIO]".

Si el precio es menor a $30, se considera una "Venta Regular" y debe imprimir: "Producto [ID]: Venta Regular de $[PRECIO]".

El sistema debe llevar dos acumuladores:

La suma total de dinero recaudado por todas las ventas.

La cantidad total de ventas premium realizadas.

Al terminar de procesar los 5 productos, debe imprimir en dos líneas separadas:

"Total recaudado: $[TOTAL]"

"Total de ventas premium: [CANTIDAD]"
*/

let productos = 1
let precio = 10
let total = 0
let cantidadVentas = 0

while (productos <= 5){
  console.log("El producto: " + productos + " tiene un precio de: " + precio)
  if (precio >= 30){
    console.log("El producto: " + productos + " Es una venta premiun " + "Su precio es: " +  precio)
    cantidadVentas = cantidadVentas + 1
  }
  else{
    console.log("El producto " + productos + " es una venta estandar, su precio es: " + precio)
  }
  total = total + precio
  precio = precio + 10
  productos = productos + 1
}
console.log("Total recaudado: " + total)
console.log("Total de ventas premiun: "+ cantidadVentas)