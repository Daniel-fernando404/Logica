/*Escenario:Estás programando la barrera automática de una estación de peaje en una autopista.
Reglas de negocio:
Pasan exactamente 6 vehículos (contados del 1 al 6).
Cada vehículo que pasa tiene un costo de peaje de 5 dólares
Sin Sin embargo, los vehículos con número impar tienen un pase libre de emergencia y NO pagan peaje (pagan $0$).
Los vehículos con número par pagan sus 5 dólares normalmente.
Al final del día (tras pasar los 6 vehículos), el sistema debe imprimir el total de dinero recaudado: "Total recaudado: [TOTAL] dólares".*/

let vehiculos = 1
let costoPeaje = 5
let dinero = 0

while (vehiculos <= 6){
  if (vehiculos % 2 === 0){
    
    console.log("Pagas peaje: " + costoPeaje)
    dinero = dinero + costoPeaje
    
  }
  else {
    console.log("No pagas peaje")
  }
  vehiculos = vehiculos + 1
}

console.log("El dinero recaudado es: " + dinero)