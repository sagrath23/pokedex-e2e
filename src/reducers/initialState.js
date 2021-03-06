export const initialState = {
    detailedPokemon: {
        id: 1,
        name: 'Bulbasaur',
        types: [
            {
                "slot": 2,
                "type": {
                    "url": "https://pokeapi.co/api/v2/type/4/",
                    "name": "poison"
                }
            },
            {
                "slot": 1,
                "type": {
                    "url": "https://pokeapi.co/api/v2/type/12/",
                    "name": "grass"
                }
            }
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
    },
    currentPokemonList: {
        "count": 949,
        "previous": null,
        "results": [
            {
                "url": "https://pokeapi.co/api/v2/pokemon/1/",
                "name": "bulbasaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/2/",
                "name": "ivysaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/3/",
                "name": "venusaur"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/4/",
                "name": "charmander"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/5/",
                "name": "charmeleon"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/6/",
                "name": "charizard"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/7/",
                "name": "squirtle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/8/",
                "name": "wartortle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/9/",
                "name": "blastoise"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/10/",
                "name": "caterpie"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/11/",
                "name": "metapod"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/12/",
                "name": "butterfree"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/13/",
                "name": "weedle"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/14/",
                "name": "kakuna"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/15/",
                "name": "beedrill"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/16/",
                "name": "pidgey"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/17/",
                "name": "pidgeotto"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/18/",
                "name": "pidgeot"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/19/",
                "name": "rattata"
            },
            {
                "url": "https://pokeapi.co/api/v2/pokemon/20/",
                "name": "raticate"
            }
        ],
        "next": "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    }
};
