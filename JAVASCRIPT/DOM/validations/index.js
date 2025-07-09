const form = document.getElementById('formulario')

const usuarioPrueba = 'miguel@prueba.com'
const passwordPrueba = 'test123'

function mostrarError(tipo){

    if(tipo === 'Correcto'){
        window.localStorage.setItem('usuario', usuarioPrueba)
        window.location.href = '/welcome.html'
    }


    let obtenerError = document.getElementById(`error${tipo}`)

    obtenerError.classList.remove('oculto')

    obtenerError.classList.add('error')

    setTimeout(()=>{

        obtenerError.classList.remove('error')

        obtenerError.classList.add('oculto')

    }, 4000)
}

function validarDatos(user, password){
    if(user === usuarioPrueba && password === passwordPrueba){
        mostrarError('Correcto')
    }
    else if (user === '' && password === ''){
        mostrarError('Datos')
    }
    else if(user !== usuarioPrueba){
        mostrarError('Usuario')
    }
    else if(password !== passwordPrueba){
        mostrarError('Password')
    }
    else{
        mostrarError('desconocido')
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let usuario = document.getElementById('email').value
    let contra = document.getElementById('password').value
    validarDatos(usuario, contra)
    console.warn('usuario', usuario, 'password', contra)
})