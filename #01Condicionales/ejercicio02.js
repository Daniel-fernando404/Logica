/*Imagina que estás programando el carrito de compras de una tienda online de ropa. La tienda quiere aplicar un 20% de descuento especial según ciertas reglas de membresía o de edad.

Reglas de negocio para obtener el descuento:

El cliente recibe el descuento si es Miembro VIP O si su edad es de 65 años o más.

Si cumple alguna de esas dos condiciones, se imprime: "¡Felicidades! Tienes un 20% de descuento."

De lo contrario, se imprime: "Precio regular. No aplica descuento."
*/


let vip = false
let edad = 20

if (vip === true || edad >= 65){
  console.log("Cumples los requisitos para tener un 20% de descuento")
}
else{
  console.log("No cumples los requisitos, no obtienes el descuento")
}