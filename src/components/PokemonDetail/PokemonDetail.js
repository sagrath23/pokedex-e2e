import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        // dispatch action to load new pokemon info
        props.loadDetailAction(props.match.params.pokemonName);
    }

    render(){
        const { detailedPokemon } = this.props;
        if(detailedPokemon) {
            return(
                <Card>
                    <CardImg top width="100%" src={detailedPokemon.sprites.front_default} alt="Pokemon Sprite" />
                    <CardBody>
                        <CardTitle>{detailedPokemon.name}</CardTitle>
                        <CardSubtitle>Pokemon ID: {detailedPokemon.id}</CardSubtitle>
                        <ListGroup>
                            {detailedPokemon.types.map((pokemonSlot, index) => (<ListGroupItem key={index}>{pokemonSlot.type.name}</ListGroupItem>))}
                        </ListGroup>
                        <Link to="/">
                            <Button>Back to list</Button>
                        </Link>
                    </CardBody>
                </Card>
            );
        } else {
            return null;
        }
    }
}

export default PokemonDetail;
