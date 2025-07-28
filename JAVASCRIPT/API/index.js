const urlBase = 'https://pokeapi.co/api/v2/pokemon'
const pokemons = [];
const pokemonsExtra = [];
const render = document.getElementById('render')
const mas = document.getElementById('mas')
let contado = 20

async function ObtenerPokemons (){
    try{
        const respuesta = await fetch(urlBase);

        if(!respuesta.ok){
            console.log('No se pudo hacer la consulta...');
            return
        }

        const data = await respuesta.json();
        
        pokemons.push(...data.results);

        await recorrerPokemons(pokemons);

        mas.addEventListener('click', async ()=>{
            try{

                let urlModificada = `https://pokeapi.co/api/v2/pokemon?offset=${contado}&limit=20`

                const masPokemons = await fetch(urlModificada)

                if(!masPokemons.ok){
                    console.log('No se pudo hacer la consulta...');
                    return
                }

                const data2 = await masPokemons.json();

                pokemonsExtra.length = 0
                pokemonsExtra.push(...data2.results);
                
                await recorrerPokemons(pokemonsExtra);

                contado += 20;
            }
            catch(error){
                console.log(error);
            }
        })
    }
    catch(error){
        console.log('ERROR', error);
        
    }
}


async function recorrerPokemons(pokemonArr){
    for(let index = 0; index < pokemonArr.length; index++){
        try{
            const pokemon = await fetch(pokemonArr[index].url)
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
    let boton = article.querySelector('.btn');
    let stats = mostrarStats(pokemon.stats);

    boton.addEventListener('click', () => {
        Swal.fire({
            html:`
            <div class='container'>
                <div class='left'>
                    <img src="${pokemon.sprites.front_default}" alt="pokmonImage">
                </div>
                <div class='rigth'>
                    <h2>${pokemon.name}</h2>
                    ${stats.map((elemento)=> {
                       return `
                       <p>${elemento.name}</p>
                       <progress max="100" value="${elemento.stat}">${elemento.stat}</progress>
                       ${elemento.stat}
                       `
                    }).join('')}
                </div>
            </div>
            `
        });
    })

    render.appendChild(article)
}

function mostrarStats(stats){

    let statsPokemon = [];

    for(let index = 0; index < stats.length; index++){

        let statObjeto = {
            name : stats[index].stat.name,
            stat: stats[index].base_stat
        }

        statsPokemon.push(statObjeto);
    }
    return statsPokemon;
}

ObtenerPokemons();

