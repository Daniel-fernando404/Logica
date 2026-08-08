/*Imagina que estás creando el módulo de notas para una plataforma educativa.

Reglas de negocio:

Si la nota es 90 o más, el alumno obtiene una calificación de "Sobresaliente".

Si la nota está entre 60 y 89 (es decir, es igual o mayor a 60), el alumno "Aprobó".

Si la nota es menor a 60, el alumno está "Reprobado".
*/

let nota = 50

if (nota >= 90){
  console.log("El alumno es sobresaliente")
}
else if (nota < 90 && nota >= 60){ //Esto se puede simplificar a else if (nota >= 60) ya que si entra en este else if significa que no es mayor o igual a 90, por lo tanto, no hace falta poner la primera condición.
  console.log("El alumno aprobo")
}
else{
  console.log("El alumno desaprobo")
}