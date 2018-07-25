import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects';
import { getPokemon} from '../services';
import actionTypes from '../constants';

export function* loadPokemonDetail(action) {
    const requestResult = yield call(getPokemon, action.payload.pokemonName);
    yield put({ type: actionTypes.detailActionType, payload: {
        detailedPokemon: requestResult.body
    } })
}

// Our watcher Saga: spawn a new loadPokemonDetail task on each INCREMENT_ASYNC
export function* watchLoadPokemonDetail() {
    yield takeEvery(actionTypes.loadDetailActionType, loadPokemonDetail)
}