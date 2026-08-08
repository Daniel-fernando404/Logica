
/*
Imagina que estás programando la puerta de acceso digital a un servidor seguro.

Reglas de negocio para permitir el acceso:

Para entrar, el usuario SIEMPRE debe ingresar la contraseña correcta (contraseñaCorrecta === true).

Y ADEMÁS, debe cumplir al menos una de estas dos cosas:

Tener rol de Administrador (esAdmin === true).

O tener un pase de Invitado Especial (tienePase === true).


*/



let contraseña = 1234
let contraseñaIngresada = 1234
let esAdmin = false
let tienePase = true

if (contraseñaIngresada != contraseña){
    console.log("Contraseña equivocada")
  }
else{
  if (esAdmin == true || tienePase == true){
    console.log("Tienes autorizacion")
  }
  else {
    console.log("No cumples los requisitos")
  }
}