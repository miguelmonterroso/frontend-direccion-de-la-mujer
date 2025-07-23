const urlBase = 'https://pokeapi.co/api/v2/pokemon'
const pokemons = [];
const render = document.getElementById('render')

async function ObtenerPokemons (){
    try{
        const respuesta = await fetch(urlBase);

        if(!respuesta.ok){
            console.log('No se pudo hacer la consulta...');
            return
        }

        const data = await respuesta.json();
        pokemons.push(...data.results);

        await recorrerPokemons();
    }
    catch(error){
        console.log('ERROR', error);
        
    }
}

async function recorrerPokemons(){
    for(let index = 0; index < pokemons.length; index++){
        try{
            const pokemon = await fetch(pokemons[index].url)
            const info = await pokemon.json();
            await crearCarta(info)
        }
        catch(error){
            console.log('Error obteniendo los detalles del pokemon', error);
        }
    }
}

function crearCarta(pokemon){
    let article = document.createElement('article')
    article.classList.add('carta')
    article.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="pokmonImage">
        <h2>${pokemon.name}</h2>
        <p>Peso: ${pokemon.weight}</p>
        <button class='btn'> Ver detalles </button>
    `
    render.appendChild(article)
}

ObtenerPokemons();

