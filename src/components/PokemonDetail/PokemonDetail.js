import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const PokemonDetail = ({detailedPokemon}) => (
    <Card>
        <CardImg top width="100%" src={detailedPokemon.sprite} alt="Pokemon Sprite" />
        <CardBody>
            <CardTitle>{detailedPokemon.name}</CardTitle>
            <CardSubtitle>Pokemon ID: {detailedPokemon.id}</CardSubtitle>
            <CardText>
                <ListGroup>
                    {detailedPokemon.types.map((pokemonSlot) => (<ListGroupItem>{pokemonSlot.type.name}</ListGroupItem>))}
                </ListGroup>
            </CardText>
            <Link to="/">
                <Button>Back to list</Button>
            </Link>
            
        </CardBody>
    </Card>
);

export default PokemonDetail;
