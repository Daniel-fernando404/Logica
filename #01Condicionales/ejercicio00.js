/*Escenario: > Imagina que estás programando el chip de un sensor para una computadora. El sensor lee la temperatura actual del procesador y debe decidir si activa el ventilador de emergencia para evitar que el equipo se queme.

Regla de negocio: > Si la temperatura supera los 75 grados, el sistema debe emitir una alarma de sobrecalentamiento. De lo contrario, debe indicar que la temperatura es normal.
*/






let temperaturaActual = 75
let activacionSensor = null //Pongo esta variable en null para que no tenga un valor definido hasta que se ejecute el if y se le asigne true o false dependiendo de la temperatura.

if (temperaturaActual >= 75){
  activacionSensor = true
  console.log("Temperatura elevada, se activa el sensor")
  console.log("Sensor activado: " + activacionSensor)
}
else {
  activacionSensor = false
  console.log("la temperatura es normal")
  console.log("Sensor activado: " + activacionSensor)
}