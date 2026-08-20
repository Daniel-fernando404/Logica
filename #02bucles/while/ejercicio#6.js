/*Escenario:Estás programando la barra de estado de descarga de un videojuego.Reglas de negocio:
El progreso inicial de la descarga es $0\%$ y el límite es $100\%$.
En cada segundo transcurrido, se descarga un paquete fijo del $20\%$.
En cada ciclo, el sistema debe imprimir en consola el porcentaje acumulado actual (ej: "Descargando: 20%", "Descargando: 40%", etc.).
Al completar el $100\%$,
el bucle debe detenerse y mostrar el mensaje final: "¡Descarga completada con éxito!".*/


let progreso = 0
let limite = 100
while (progreso <= limite){
  console.log("la descarga es del: " + progreso + "%") 
  progreso = progreso + 20
}
console.log("Descarga completada")