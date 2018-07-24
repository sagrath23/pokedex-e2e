const baseUrl = 'http://pokeapi.co/api/v2/';

export const listPokemons = async (limit, offset) => {
    const listPokemonsEndpoint = `${baseUrl}pokemon?limit=${limit}&offset=${offset}`;
    return await fetch(listPokemonsEndpoint);
};

export const getPokemon = async (pokemonName) => {
    const getPokemonEndpoint = `${baseUrl}pokemon/${pokemonName}`;
    return await fetch(getPokemonEndpoint);
}