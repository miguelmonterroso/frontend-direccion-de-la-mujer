// APLICACION PARA QUE EL USUARIO SEPA SI PUEDA CRUZAR O NO LA CALLE.

// let colorSemaforo = prompt('De que color esta el semaforo?').toLocaleLowerCase()

// if (colorSemaforo === 'verde'){
//     alert('Puedes cruzar')
// }
// else if(colorSemaforo === 'amarillo'){
//     alert('Cruza con precaucion o mejor espera')
// }
// else if(colorSemaforo === 'rojo'){
//     alert('no cruces la calle en este momento')
// }
// else{
//     console.log('Este color no es valido')
// }

// -------------------------------------------------------------
// HACER UNA APP PARA UNA HELADERIA DONDE SE CALCULE EL PRECIO DEL HELADO BASADO EN EL TOPPING QUE EL USUARIO ESCOJA

// const precioBase = 10;

// let oreo = 2;
// let mania = 2;
// let botonetas = 3;
// let chocolate = 5;
// let caramelo = 4;

// let toppingSeleccionCliente = prompt('Que topping deseas? oreo, mania, botonetas, chocolate, caramelo').toLowerCase();


// if(toppingSeleccionCliente === 'oreo'){
//     let total = precioBase + oreo
//     let agregarOtroSabor = prompt('Deseas agregar otro topping? mania, botonetas, chocolate, caramelo')
//     if(agregarOtroSabor === 'mania'){
//         document.write('El total a pagar es de Q', total + mania);
//     }
//     else if(agregarOtroSabor === 'botonetas'){
//         document.write('El total a pagar es de Q', total + botonetas);
//     }
//     else if(agregarOtroSabor === 'chocolate'){
//         document.write('El total a pagar es de Q', total + chocolate);
//     }
//     else if(agregarOtroSabor === 'caramelo'){
//         document.write('El total a pagar es de Q', total + caramelo);
//     }
//     else{
//         document.write('El total a pagar es de Q', total);
//     }
// }        // 'chocolate'
// else if(toppingSeleccionCliente === 'mania'){
//     let total = precioBase + mania
//     document.write('El total a pagar es de Q', total);
// }
// else if(toppingSeleccionCliente === 'botonetas'){
//     let total = precioBase + botonetas
//     document.write('El total a pagar es de Q', total);
// }
// else if(toppingSeleccionCliente === 'chocolate'){
//     let total = precioBase + chocolate
//     document.write('El total a pagar es de Q', total);
// }
// else if(toppingSeleccionCliente === 'caramelo'){
//     let total = precioBase + caramelo
//     document.write('El total a pagar es de Q', total);
// }
// else{
//     document.write('Ese topping no esta disponible')
// }

// ---------------------------------------------------------------

// CREAR APP QUE SE ENCARGUE DE VALIDAR SI EL USUARIO CUMPLE LOS REQUISITOS PARA OBTENER LA LICENCIA DE CONDUCIR.
// LO NECESARIO ES GANAR EL EXAMEN TEORICO, GANAR EL EXAMEN PRACTICO, TENER BUENA VISTA, SER MAYOR DE EDAD (18) Y SI EN CASO NO ES MAYOR DE 18, SI ES MAYOR DE 16 Y CUENTA CON EL RESPALDO DE SUS PADRES.

const examenTeorico = prompt('Ganaste el examen teorico? SI - NO').toLowerCase();

const examenPractico = prompt('Ganaste el examen practico? SI - NO').toLowerCase();

const buenaVista = prompt('Tienes buena vista? SI - NO').toLowerCase();

const edad = Number(prompt('Ingresa tu edad'))

if (edad >= 18) {
    if (examenTeorico === 'si' && examenPractico === 'si' && buenaVista === 'si') {
        document.write('Felicidades, aqui tienes tu licencia')
    }
    else if (examenTeorico === 'no') {
        document.write('Lo siento pero no puedes obtener tu licencia por no haber ganado el examen teorico')
    }
    else if (examenPractico === 'no') {
        document.write('Lo siento pero no puedes obtener tu licencia por no haber ganado el examen practico')
    }
    else if (buenaVista === 'no') {
        document.write('Lo siento pero no puedes obtener tu licencia por no tener buena vista')
    }
    else {
        console.log('Hubo un error, por favor contacta al administrador.')
    }
}
else if (edad >= 16 && edad < 18) {
    let consetimiento = prompt('tienes permiso de tus padres? SI - NO')
    if (consetimiento === 'si') {
        if (examenTeorico === 'si' && examenPractico === 'si' && buenaVista === 'si') {
            document.write('felicidabes, aqui tienes tu licencia, porque tienes el consentimiento de tus padres, usala con responsabilidas')
        }
        else if (examenTeorico === 'no') {
            document.write('Lo siento pero no puedes obtener tu licencia por no haber ganado el examen teorico')
        }
        else if (examenPractico === 'no') {
            document.write('Lo siento pero no puedes obtener tu licencia por no haber ganado el examen practico')
        }
        else if (buenaVista === 'no') {
            document.write('Lo siento pero no puedes obtener tu licencia por no tener buena vista')
        }
        else {
            console.log('Hubo un error, por favor contacta al administrador.')
        }

    }
    else {
        document.write('No puedes obtener la licencia por que eres menor de edad y no tienes consentimiento de tus padres')
    }
}
else{
    document.write('no puedes obtener la licencia por tu edad')
}

