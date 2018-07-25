import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PokemonDetail from './PokemonDetail';
import actions from '../../actions';


const mapStateToProps = ({ pokedexReducer }) => ({
    detailedPokemon: pokedexReducer.detailedPokemon
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
