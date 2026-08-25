/*
Escenario:
Un almacén recibe un cargamento de 10 cajas numeradas del 1 al 10.

Reglas de negocio:
1. El sistema debe revisar las cajas una por una.
2. Las cajas con número múltiplo de 3 (caja % 3 === 0) contienen artículos frágiles. Para estas cajas, debe imprimir en consola: "Caja [NUMERO]: Frágil".
3. Todas las demás cajas contienen artículos estándar. Para estas, debe imprimir: "Caja [NUMERO]: Estándar".
4. El sistema debe contar cuántas cajas frágiles hubo en total a lo largo de la revisión.
5. Al finalizar las 10 cajas, debe mostrar en consola: "Total de cajas frágiles recibidas: [CANTIDAD]".
*/


let caja = 1
let totalFragiles = 0
while (caja <= 10){
  console.log("caja: " + caja)
  if (caja % 3 === 0){
    console.log("La caja: " + caja +" es fragil")
    totalFragiles = totalFragiles + 1
  }
  else{
    console.log("La caja: " + caja + " No es fragil")
  }
  caja = caja + 1
}
console.log("La cantidad de cajas fragiles es: " + totalFragiles)