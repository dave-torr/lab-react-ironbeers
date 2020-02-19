import React, { Component } from 'react';
import Homebutton from './homebutton';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'




class AllBeers extends Component {

    
    showThebeers = () => {
        return this.props.beers.map(eachBeer =>{
            return (

                <Card key={eachBeer._id} style={{ width: '18rem' }}>
                <img className="cardImg" variant="top" src={eachBeer.image_url} />
                <Card.Body className="card">
                    <Card.Title>{eachBeer.name}</Card.Title>
                    <Card.Text>
                        {eachBeer.tagline}
                    </Card.Text>
                    <Card.Text>
                        Creator: {eachBeer.contributed_by}
                    </Card.Text>
                    <Link to={`/allbeers/${eachBeer._id}`}> 
                    More Details 
                </Link> 
                </Card.Body>
                </Card>
            )
        })
    }

    render() {
        
        return (
            <div>
            <Homebutton/>
                All Beers
                     {this.showThebeers()}
                
            </div>
        );
    }
}

export default AllBeers;