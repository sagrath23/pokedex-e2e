import { createActions } from 'redux-actions';

export const { detail, list } = createActions({
    DETAIL: (pokemonName) => ({ pokemonName }),
    LIST: () => (pageToList) => ({ pageToList})
});
