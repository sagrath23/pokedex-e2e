import actionTypes from '../constants';
import { initialState } from './initialState';

const pokedexReducer = (currentState = initialState, action) => {
    switch(action.type){
        case actionTypes.listActiontype: {
            return Object.assign({}, currentState, {currentPokemonList: action.payload.newPokemonList})
        }break;
        default: {
            return currentState;
        }break;
    }
};

export default pokedexReducer;
