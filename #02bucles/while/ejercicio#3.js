/*Imagina que estás programando el chip de una pulsera inteligente para fitness.

Reglas de negocio:
1. El usuario realiza una caminata durante 5 minutos (empezando en el minuto 1).
2. En cada minuto que pasa, el usuario quema 15 calorías.
3. En cada vuelta del bucle debes mostrar en consola el progreso del minuto actual:
(Ejemplo: "Minuto 1: 15 calorías quemadas").
4. Recuerda aplicar la regla de orden dentro de las llaves { }:
* Primero sumas las calorías.
* Luego muestras el mensaje del minuto actual.
* Al final aumentas el minuto para avanzar a la siguiente vuelta.
*/

let minutos = 1
let quemaduras = 0
while (minutos <= 5){
  console.log("Minutos pasados: " + minutos)
  quemaduras = quemaduras + 15
  console.log("calorias quemadas: " + quemaduras)
  minutos = minutos + 1
}
