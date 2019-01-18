import { put, takeEvery, call } from 'redux-saga/effects';
import { listPokemons } from '../services';
import actionTypes from '../constants';

export function* loadNewPokemonList(action) {
    yield console.log(action, 'saga action');
    const requestResult = yield call(listPokemons, action.payload.urlToLoad);
    yield put({ type: actionTypes.listActiontype, payload: {
        newPokemonList: requestResult.body
    } })
}

// Our watcher Saga: spawn a new loadNewPokemonList task on each INCREMENT_ASYNC
export function* watchLoadNewPokemonList() {
    yield takeEvery(actionTypes.loadListActionType, loadNewPokemonList)
}