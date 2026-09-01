/*
Escenario:
Estás programando un generador automático de tablas de multiplicar para una aplicación educativa.

Reglas de negocio:

Genera la tabla del 7, evaluando los factores del 1 al 10 en orden ascendente.

Utiliza un bucle for para realizar el recorrido.

En cada vuelta, debe imprimir en consola la operación y su resultado con el formato: "7 x [NUMERO] = [RESULTADO]".

Al finalizar la tabla, debe mostrar en consola: "Tabla completada".
*/

let a = 7;
for (let i = 1; i <= 10; i++) {
    let resultado = a * i;
    console.log(a + "X" + i + "=" + resultado);
}
console.log("Tabla completada");