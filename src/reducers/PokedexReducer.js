import actionTypes from '../constants';
import { initialState } from './initialState';

const pokedexReducer = (currentState = initialState, action) => {
    console.log(action, 'action');
    switch(action.type){
        case actionTypes.listActiontype: {
            return Object.assign({}, currentState, {currentPokemonList: action.payload.newPokemonList})
        }break;
        case actionTypes.detailActionType: {
            return Object.assign({}, currentState, {detailedPokemon: action.payload.detailedPokemon})
        }break;
        default: {
            return currentState;
        }break;
    }
};

export default pokedexReducer;
