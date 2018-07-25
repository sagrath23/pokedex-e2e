import request from 'superagent';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const listPokemons = async (listUrl) => {
    return await request.get(listUrl);
};

export const getPokemon = async (pokemonName) => {
    const getPokemonEndpoint = `${baseUrl}pokemon/${pokemonName}`;
    console.log(getPokemonEndpoint, 'endpoint');
    return await request.get(getPokemonEndpoint);
}