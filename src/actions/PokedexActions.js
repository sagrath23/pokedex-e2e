import actionTypes from '../constants';

export const listAction = (newPokemonList) => ({
    type: actionTypes.listActiontype,
    payload: {
        newPokemonList
    }
});

export const detailAction = () => ({
    type: actionTypes.detailActionType
});

export const loadListAction = (urlToLoad) => ({
    type: actionTypes.loadListActionType,
    payload: {
        urlToLoad
    }
})

export const loadDetailAction = (pokemonName) => ({
    type: actionTypes.loadDetailActionType,
    payload: {
        pokemonName
    }
});
