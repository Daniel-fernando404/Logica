/*
 El Elevador de Carga (Lienzo en Blanco)


> **Escenario:**
> Estás programando el sistema de control de un elevador de carga industrial en un almacén.
> **Reglas de negocio:**
> 1. El elevador empieza completamente vacío ($0\text{ kg}$) y tiene una capacidad máxima de **150 kg**.
> 2. En cada carga que se introduce, se le suman **30 kg**.
> 3. El elevador debe seguir recibiendo peso y mostrando en consola el peso actual acumulado mientras no supere la capacidad máxima.
> 4. Cuando el elevador alcance la capacidad máxima permitida, debe detenerse y mostrar un mensaje final indicando que la carga está completa y lista para subir.
> 
> 

*/

let kilo = 0
let carga = 30
let cargaMaxima = 150

while (kilo <= cargaMaxima){
  console.log("Los kilos actuales son: "+ kilo)
  kilo = kilo + carga
}

