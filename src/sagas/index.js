import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import { watchLoadNewPokemonList } from './PokemonListSagas';
import { watchLoadPokemonDetail } from './PokemonDetailSagas';

export default function* rootSaga() {
    yield all([watchLoadNewPokemonList(), watchLoadPokemonDetail()]);
}