import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { PokemonDetail } from './components/PokemonDetail';
import { PokemonListContainer } from './components/PokemonList';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <NavigationBar />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
          <Router>
            <div>
              <Route exact path="/" component={PokemonListContainer} />
              <Route path="/detail" component={PokemonDetail} />
            </div>
          </Router> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
