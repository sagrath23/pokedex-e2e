import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects';
import { listPokemons } from '../services';
import actionTypes from '../constants';

export function* loadNewPokemonList(action) {
    const newPokemonList = yield call(listPokemons, action.payload.urltoLoad);
    yield console.log(newPokemonList, 'ohhhhhhhhh yeah!!!');
    yield delay(1000)
    yield put({ type: actionTypes.listActiontype, payload:  })
}

// Our watcher Saga: spawn a new loadNewPokemonList task on each INCREMENT_ASYNC
export function* watchLoadNewPokemonList() {
    yield takeEvery(actionTypes.loadListActionType, loadNewPokemonList)
}