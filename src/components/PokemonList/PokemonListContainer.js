import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonList from './PokemonList';
import actions from '../../actions';

const mapStateToProps = ({ pokedexReducer }) => ({
    currentPokemonList: pokedexReducer.currentPokemonList
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
