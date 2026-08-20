/*Estás programando un filtro de seguridad numérico.

Reglas de negocio:

El sistema debe revisar todos los números del 1 al 10 (uno por uno).

Si el número actual es par, debe imprimir en consola: "Número par detectado: [NUMERO]".

Si el número es impar, simplemente no imprime nada sobre ese número y continúa avanzando.

Al terminar de revisar los 10 números, debe imprimir: "Revisión finalizada".*/

let numero = 1

while (numero <= 10){
  
  if (numero % 2 === 0){
    console.log("El numero: " + numero + " Es par")
  }
  numero = numero + 1
}
console.log("Revision terminada")