import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import { watchLoadNewPokemonList } from './PokemonListSagas';

export default function* rootSaga() {
    yield all([watchLoadNewPokemonList()]);
}