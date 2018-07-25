import { connect } from 'react-redux';
import PokemonList from './PokemonList';

const mapStateToProps = ({ pokedexReducer }) => ({
    currentPokemonList: pokedexReducer.currentPokemonList
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
