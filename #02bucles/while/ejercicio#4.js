
/*Escenario: > Un generador de energía arranca con 100 unidades de carga. Por cada ciclo de funcionamiento, el generador consume 20 unidades de energía.

Reglas de negocio: > 1. El sistema debe funcionar y consumir energía mientras le quede carga disponible.
2. En cada ciclo, debe informar en consola cuánta carga le queda actualmente.
3. Cuando la energía se agote por completo, el sistema debe imprimir un mensaje final avisando que el generador se ha apagado.
*/



let energia = 100
let consumo = 20
while (energia > 0 && energia <= 100){
  console.log("energia actual: " + energia)
  console.log("El consumo de energia es de: " + consumo)
  energia = energia - consumo
  if (energia == 0){ //Aqui esta bien pero para ahoorar codigo, hubiera puesto el mensaje final fuera del while, ya que si el while termina significa que energia es 0, por lo tanto, no hace falta poner un if.
    console.log("generador apagado")
  }
  
}