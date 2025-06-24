// function saludar(nombre, edad, nacionalidad, hobbie){
//     console.log('Bienvenido a Isitech', nombre, 'de edad:', edad, 'con nacionalidad:', nacionalidad, 'y que le gusta', hobbie)
// }

// saludar('Miguel', 28, 'guatemalteca', 'salir a correr');

// saludar('salir a correr', 'guatemalteca', 28, 'Miguel');

// SIEMPRE PASAR LOS PARAMETROS EN EL ORDEN ADECUADO
// JAVASCRIPT NO ENTIENDO QUE TIPO DE DATO ES EL PARAMETRO, SIMPLEMENTE ESPERA UN PARAMETRO

// function conConsole(){
//     console.log('Soy un console.log');
// }

// function conReturn(){
//     return('Soy un return');
// }


// let funConConsole = conConsole();

// let funConReturn = conReturn();

// console.log(funConConsole);

// console.log(funConReturn);

// console.log('que tipo de funcion eres?', funConReturn);
// console.log('que tipo de funcion eres?', funConConsole);



// let edadUsuario = Number(prompt('Ingresa tu edad'));
// function validarEdad(edad){

//     if(isNaN(edad)){
//         console.log('DEBES INGRESAR TU EDAD');
//         setTimeout(() => {
//             window.location.reload()
//         }, 5000)
//         return;
//     }

//     if(edad >= 18){
//         console.log('Puedes ingresar a la fiesta porque eres mayor de edad.');
//     }
//     else{
//         console.log('Menores de edad no ingresan a la fiesta.');
//     }
// }

// validarEdad(edadUsuario)


// 1. FORMA NORMAL DE DECLARAR UNA FUNCION 

// function soyUnaFuncion(){}

// 2. FORMA DE DECLARAR UNA FUNCION ANONIMA

// let funcionAnonima = function(){
//     console.log('prueba');
// }

// 3. FORMA DE DECLARA UN ARROW FUNCTION

// let arrowFunction = () => {
//     console.log('Soy un arrow function');
// }
// arrowFunction();

// let numeroUsuario = Number(prompt('Ingresa un numero'))

// function fizzBuzz(numero){
//     if(isNaN(numero)){
//         console.log('DEBES INGRESAR UN NUMERO');
//         setTimeout(() => {
//             window.location.reload()
//         }, 5000)
//         return;
//     }
//     if(numero <= 0){
//         console.log('Este numero no es valido.');
//     }
//     else{
//         for(let index = 1; index <= numero; index++){
//             if(index % 3 === 0 && index % 5 === 0){
//                 console.log(index, 'FizzBuzz');
//             }
//             else if(index % 3 === 0){
//                 console.log(index, 'Fizz');
//             }
//             else if(index % 5 === 0){
//                 console.log(index, 'Buzz');
//             }
//             else{
//                 console.log(index);
//             }
//         }
//     }

// }
// fizzBuzz(numeroUsuario)

// SCOPE

// DOS TIPOS DE SCOPE: - GLOBAL, - LOCAL

//GLOBAL
// let numero = 20;

// console.log(numero)

// function test(){
//     console.log('dentro de funcion', numero);
// }

// test()

// //LOCAL

// function prueba2(){
//     let texto = 'SOY UN TEXTO LOCAL'
//     console.log(texto, numero)
// }

// prueba2();
// console.log(texto)

// let scopeGlobal =  20

// function sumar(){

//     let dato = 20
//     console.log(dato + scopeGlobal)
//     return dato
// }

// let datoDeSumar = sumar()

// function restar(){
//     console.log(scopeGlobal - datoDeSumar);
// }

// restar()