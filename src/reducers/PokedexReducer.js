import actionTypes from '../constants';
import { initialState } from './initialState';

const pokedexReducer = (currentState = initialState, action) => {
    switch(action.type){
        case actionTypes.listActiontype: 
            return Object.assign({}, currentState, {currentPokemonList: action.payload.newPokemonList});
        case actionTypes.detailActionType: 
            return Object.assign({}, currentState, {detailedPokemon: action.payload.detailedPokemon});
        default: 
            return currentState;
    }
};

export default pokedexReducer;
