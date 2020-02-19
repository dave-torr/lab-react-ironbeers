import React, { Component } from 'react';
import Homebutton from './homebutton';
import { Link } from 'react-router-dom';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

// IN THIS CASE, STATE WAS PASSED DOWN FROM APP.JS, MEANING IT IMPORTED ALL THE DATA AND THEN WENT THROUGH.
// ANOTHER GET REQUEST WILL BE MORE USEFULL IF DATABASE IS TOO LARGE


class BeerDetail extends Component {
    
    
    beerSpecs = (x) => {
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
        let beers = this.props.beers;
        // the props that are passed down, are then given a constant in this component, as 'beers'
        let beerId = this.props.match.params.beerId;
        // the beer id variable that was declared in the switch before, is assiged a url according to each beer id from the API.
        let beer = beers.find(eachBeer => eachBeer._id === beerId);
        

        return (
            <div>
                <Homebutton/>
                <Link to='/allbeers'> 
                All Beers
                </Link>
                {this.props.ready? (this.beerSpecs(beer)) : <Spinner animation="grow" variant="light" />}
               
            </div>
        );
    }
}

export default BeerDetail;
