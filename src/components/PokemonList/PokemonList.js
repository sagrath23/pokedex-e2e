import React from 'react';
import { Col, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const PokemonList = ({ currentPokemonList, loadListAction }) => {
    return (
    <Col>
        <ListGroup>
            {currentPokemonList.results.map((pokemon, index) => (
            <ListGroupItem key={index}>
                <Link to={`/detail/${pokemon.name}`}>
                    {pokemon.name}
                </Link>
            </ListGroupItem>))}
        </ListGroup>
        <ButtonGroup>
            <Button
                disabled={!currentPokemonList.previous}
                onClick={() => {
                    currentPokemonList.previous ? loadListAction(currentPokemonList.previous) : null
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
