const baseUrl = 'http://pokeapi.co/api/v2/';

export const listPokemons = async (listUrl) => {
    return await fetch(listUrl);
};

export const getPokemon = async (pokemonName) => {
    const getPokemonEndpoint = `${baseUrl}pokemon/${pokemonName}`;
    return await fetch(getPokemonEndpoint);
}