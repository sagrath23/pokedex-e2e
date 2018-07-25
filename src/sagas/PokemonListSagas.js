import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../constants';

export function* loadNewPokemonList() {
    yield console.log('fuck yeah!!!');
    yield delay(1000)
    yield put({ type: actionTypes.listActiontype })
}

// Our watcher Saga: spawn a new loadNewPokemonList task on each INCREMENT_ASYNC
export function* watchLoadNewPokemonList() {
    yield takeEvery(actionTypes.loadListActionType, loadNewPokemonList)
}