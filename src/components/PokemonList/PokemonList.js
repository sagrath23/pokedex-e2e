import React, { Component } from 'react';
import { Col, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

export default class PokemonList extends Component {
    constructor() {
        super();

        this.state = {
            previousPage: '',
            nextPage: ''
        }
    }

    render() {
        return (
            <Col>
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <ButtonGroup>
                    <Button>Prev</Button>
                    <Button>Next</Button>
                </ButtonGroup>
            </Col>
        );
    }
}