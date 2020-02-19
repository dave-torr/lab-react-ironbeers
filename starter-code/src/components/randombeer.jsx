import React, { Component } from 'react';
import Homebutton from './homebutton';
import axios from 'axios'
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Randombeer extends Component {

    state= {
        ranBeers: {},
        ready: false,
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(res=> {
          this.setState({
            ranBeers: res.data,
            ready: true
          })
        })
      }

    //   in this iteration we are doing another get request that generates a random beer info.
    // the random beer Id is passed down into the beer specs creator and boom. Random beer.
    
    
      RandBeerSpecs = (x) => {
        return (
        <Container>
        <Row>
            <Col sm={4}className="justify-content-md-center" >
            <img className="beerdetailimg" src={x.image_url}/>
            </Col>
            <Col sm={8}>
            <h4>{x.name}</h4> 
            <p>{x.tagline}</p>
            <p> Fist Brewed: {x.first_brewed}</p>
            <p>Attenuation: {x.attenuation_level}</p>
            <h5>Description</h5>
            <p>{x.description}</p>
            <h6>Contribuited by:</h6>
            <p>{x.contributed_by}</p>
            </Col>
        </Row>            
        </Container>    
        )
    }
    
    render() {
        return (
            <div>
                <Homebutton/>
                <Link to='/allbeers'> 
                All Beers
                </Link>
                {this.state.ready? (this.RandBeerSpecs(this.state.ranBeers)) : <Spinner animation="grow" variant="light" />}
               
            </div>
        );
    }
}

export default Randombeer;