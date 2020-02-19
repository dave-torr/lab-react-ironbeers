import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home';
import AllBeers from './components/allbeers';
import Randombeer from './components/randombeer';
import Newbeer from './components/newbeer';
import BeerDetail from './components/BeerDetail';

import axios from 'axios'
import { Row, Container } from 'react-bootstrap';
import {Switch, Route, } from 'react-router-dom'


class App extends Component {
state = {
  beers: [],
  ready: false,
}
// set states as blank. The info is then fed through the axios get request and fed into state. This helps to 
// then pass the props down into component ONCE then it's not necesary to do multiple requests on other components.

componentDidMount(){
  axios.get('https://ih-beers-api2.herokuapp.com/beers').then(res=> {
    this.setState({
      beers: res.data,
      ready: true
    })
  })
}

  render() {
    return (
      <div>
        <header className="App-header"> 
          <Container>
              <Row>
              Ironbeers
              </Row>
          </Container>
        </header>

        <Switch>
          <Route  exact path="/" render={props => <Home/>} /> 

          <Route  exact path="/allbeers" render={props => 
            <AllBeers {...props} beers={this.state.beers}/>} 
            />

          <Route  exact path="/randombeer" render={props => <Randombeer/>} />
          <Route  exact path="/newbeer" render={props => <Newbeer/>} />
          <Route path="/allbeers/:beerId" render={(props) => <BeerDetail {...props} ready={this.state.ready} beers={this.state.beers}/>} />

        </Switch>      
      </div>
    );
  }
}

export default App;
