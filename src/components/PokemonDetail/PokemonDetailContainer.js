import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PokemonDetail from './PokemonDetail';
import actions from '../../actions';

/*
const mapStateToProps = ({ pokedexReducer }) => ({
    detailedPokemon: pokedexReducer.detailedPokemon
});
*/
const mapStateToProps = ({ pokedexReducer }) => {
    console.log(pokedexReducer, 'Ahhhhhhhhhhhhh');
    return { detailedPokemon: pokedexReducer.detailedPokemon };
}

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
