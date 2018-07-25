import React from 'react';
import { Col, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

const PokemonList = ({ currentPokemonList, loadListAction }) => {
    return (
    <Col>
        <ListGroup>
            {currentPokemonList.results.map((pokemon, index) => (<ListGroupItem key={index}>{pokemon.name}</ListGroupItem>))}
        </ListGroup>
        <ButtonGroup>
            <Button
                disabled={!currentPokemonList.prev}
                onClick={() => {
                    currentPokemonList.prev ? loadListAction(currentPokemonList.prev) : null
                }}
            >
                Previous
            </Button>
            <Button
                disabled={!currentPokemonList.next}
                onClick={() => {
                    currentPokemonList.next ? loadListAction(currentPokemonList.next) : null
                }}
            >
                Next
            </Button>
        </ButtonGroup>
    </Col>);

}

export default PokemonList;
