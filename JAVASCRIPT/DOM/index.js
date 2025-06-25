const botonDeHtml = document.getElementById('btnPrincipal')
const ocultar = document.getElementById('btnSegundo')
const render = document.getElementById('areaDeRender')

const emojis = ['🌓', '🎌', '🎣', '🍥', '🎴', '🏒', '🌞', '🌚']

botonDeHtml.addEventListener('click', () => {
    botonDeHtml.classList.add('esconder')
    render.classList.remove('esconder')

    for (let index = 0; index < emojis.length; index++) {
        crearElemento(emojis[index])
    }

    ocultar.classList.remove('esconder')
})

ocultar.addEventListener('click', () => {
    render.classList.add('esconder')
    render.innerHTML = ''
    botonDeHtml.classList.remove('esconder')
    ocultar.classList.add('esconder')
})

function crearElemento(emoji) {
    let article = document.createElement('article')
    article.innerHTML = emoji
    article.classList.add('carta')

    render.append(article)
}



