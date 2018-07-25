import actionTypes from '../constants';
import { initialState } from './initialState';

const pokedexReducer = (currentState = initialState, action) => {
    switch(action.type){
        default: {
            console.log(currentState, 'in pokedex reducer!!!');
            return currentState;
        }
    }
};

export default pokedexReducer;
