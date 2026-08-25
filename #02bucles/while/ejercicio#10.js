/*
Escenario:
Estás programando el sistema de monitoreo térmico de un horno industrial para evitar sobrecalentamientos.

Reglas de negocio:

El horno realiza 8 lecturas consecutivas, una por cada ciclo (contadas del 1 al 8).

La temperatura arranca en 0°C y en cada ciclo aumenta 15°C.

En cada lectura, si la temperatura alcanza o supera los 60°C, debe imprimir en consola: "Lectura [CICLO]: Alerta de alta temperatura ([TEMP]°C)".

Si la temperatura es menor a 60°C, debe imprimir: "Lectura [CICLO]: Temperatura normal ([TEMP]°C)".

El sistema debe llevar el registro de cuántas veces se superó el límite de alerta (60°C o más).

Al finalizar los 8 ciclos, debe imprimir un reporte final con el balance: "Total de alertas registradas: [CANTIDAD]".
*/

let lecturas = 1
let temperatura = 0
let totalAlerta = 0

while (lecturas <= 8 ){
  console.log("Realizando la lectura: " + lecturas)
  console.log("Revisando la temperatura: "+ temperatura + "°C")
  if (temperatura >= 60){
    console.log("La lectura: " + lecturas + " Esta en ALERTA de altas temperaturas" + temperatura)
    totalAlerta = totalAlerta + 1
  }
  else{
    console.log("La lectura: " + lecturas + " Esta en temperatura estable")
  }
  lecturas = lecturas + 1
  temperatura = temperatura + 15
  
}
console.log("El total de alerta es: " + totalAlerta);