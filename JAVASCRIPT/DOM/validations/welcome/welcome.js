const usuario = window.localStorage.getItem('usuario')
console.log(usuario);

document.getElementById('titulo').innerHTML = `BIENVENIDO ${usuario}`

