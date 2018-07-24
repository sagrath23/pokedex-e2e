import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { PokemonDetail } from './components/PokemonDetail';
import PokemonList from './components/PokemonList/PokemonList';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <NavigationBar />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <PokemonList />
            <PokemonDetail
              pokemonId={1}
              pokemonName={'Bulbasaur'}
              pokemonSprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
              pokemonTypes={[
                {
                  "slot": 2,
                  "type": {
                    "url": "https://pokeapi.co/api/v2/type/4/",
                    "name": "poison"
                  }
                },
                {
                  "slot": 1,
                  "type": {
                    "url": "https://pokeapi.co/api/v2/type/12/",
                    "name": "grass"
                  }
                }
              ]}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
