import React from 'react';
import { Col, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

const PokemonList = ({ currentPokemonList }) => {
    console.log(currentPokemonList, 'List!!!!');
    return (
    <Col>
        <ListGroup>
{currentPokemonList.results.map((pokemon, index) => (<ListGroupItem key={index}>{pokemon.name}</ListGroupItem>))}
        </ListGroup>
        <ButtonGroup>
            <Button>Prev</Button>
            <Button>Next</Button>
        </ButtonGroup>
    </Col>);

}

export default PokemonList;
