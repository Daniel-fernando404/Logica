/*Imagina que estás programando el módulo de ahorro de una app bancaria.

Reglas de negocio:

El usuario quiere ahorrar dinero durante 4 días.

Cada día ingresa 10 dólares a su cuenta.

Usa un bucle while para simular el paso de los 4 días. En cada repetición, suma los 10 dólares a una variable totalAhorrado.

Al finalizar el bucle, imprime en consola: "Total ahorrado tras 4 días: $[TOTAL]".
*/

let dia = 1
let ahorro = 0
while (dia <= 4){
   ahorro = ahorro + 10
  console.log("El dia es: " + dia)
  console.log("el total ahorrado es: " + ahorro)
  dia = dia + 1
}