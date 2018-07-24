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


const PokemonDetail = ({ pokemonId, pokemonName, pokemonTypes, pokemonSprite }) => (
    <Card>
        <CardImg top width="100%" src={pokemonSprite} alt="Pokemon Sprite" />
        <CardBody>
            <CardTitle>{pokemonName}</CardTitle>
            <CardSubtitle>Pokemon ID: {pokemonId}</CardSubtitle>
            <CardText>
                <ListGroup>
                    {pokemonTypes.map((pokemonSlot) => (<ListGroupItem>{pokemonSlot.type.name}</ListGroupItem>))}
                </ListGroup>
                <ul>
                    
                </ul>
            </CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
);

export default PokemonDetail;
