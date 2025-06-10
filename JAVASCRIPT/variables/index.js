// Declaramos nombre del usuario

var nombre = 'Miguel'
console.log(nombre);

nombre = 'Jose'
console.log(nombre)

var nombre = 'Pedro'
console.log(nombre)


// VAR se puede re asignar y re de clarar


let precio = 10
console.log(precio)

precio = 20
console.log(precio)


// LET solo nos permite re asignar el valor

const edad = 28
console.log(edad)

// CONST no me permite re declarar ni re asignar


// METODOS DE ENTRADA:
// prompt
// inputs


// METODOS DE SALIDA:
// console.log => imprime informacion en consola
// document.write => permite imprimir informacion en el documento
// alert => permite abrir una ventana emergente


console.log(nombre)
// document.write(nombre)
// alert(nombre)

// let nombreUsuario = prompt('Ingresa tu nombre por favor!')
// let edadUsuario = prompt('Ingresa tu edad por favor')
// let gustosUsuario = prompt('Ingresa algo que te guste hacer')


//CONCATENAR: Se puede realizar con una , o un signo +

// console.log('Bienvenido', nombreUsuario, ' de edad', edadUsuario, ' que le gusta', gustosUsuario)

let primerDato = prompt('Ingresa el primer valor')
let segundoDato = prompt('Ingresa el segundo valor')

//TYPEOF nos permite saber que tipo de datos estamos almacenando en la variable

console.log(typeof primerDato)
console.log(typeof segundoDato)

let total =  Number(primerDato) + Number(segundoDato)

console.log(typeof total);

console.log(total)


// EJERCICIO:

// HACER UNA APLICACION WEB, que le solicite al usuario lo siguiente:
// - NOMBRE COMPLETO
// - EDAD
// - ESTADO CIVIL
// - SI SABE MANEJAR

// GUARDAR ESA INFORMACION EN VARIABLES Y LUEGO IMPRIMIRLA CON UN CONSOLE.LOG Y MOSTRAR LA INFORMACION CONCATENADA.


