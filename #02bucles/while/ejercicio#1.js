/*Escenario:
Estás programando la cuenta regresiva para el lanzamiento de un cohete espacial.

Reglas de negocio:

El sistema debe empezar a contar desde el número 5 hacia abajo hasta llegar al 1.

Debe imprimir en consola cada número de la cuenta regresiva (ej: "T-minus 5", "T-minus 4", etc.).

Al terminar la cuenta (cuando llegue a 0), debe imprimir: "¡Despegue exitoso! 🚀".
*/


let cuentaAtras = 5

while (cuentaAtras > 0){
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras -1

}
console.log("¡Despegue exitoso! 🚀")