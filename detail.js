//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemon => {
    const pokemonName = new Pokémon(pokemon.name);
    for (let i = 0; i < pokemon.stats.length; i++) {
        const object = pokemon.stats[i];
        const newStats = new Stats(object.name, object.baseValue);
        pokemonName.addStats(newStats);
    }
    console.log(pokemonName);
})
