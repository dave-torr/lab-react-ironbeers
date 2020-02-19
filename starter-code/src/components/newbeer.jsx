import React, { Component } from 'react';
import Homebutton from './homebutton';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'




class Newbeer extends Component {
    state ={
        newBeer: {},
    }

    SubmitForm = (e) => {
        e.preventDefault()        
        // axios.post()
    }

    render() {
        return (
            <div>
                <Homebutton/>

                <h4>New Beers</h4> 
                <Form className="form" onClick={this.SubmitForm}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Beer Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Taglines</Form.Label>
                        <Form.Control type="text" placeholder="Tagline" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Contribuited By</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Button variant="primary" size="lg" block>
                        Submit
                    </Button>

                </Form>
            </div>
        );
    }
}

export default Newbeer;