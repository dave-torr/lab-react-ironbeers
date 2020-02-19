import React from 'react';
import {Link} from 'react-router-dom';
import beersImg from '../images/beers.png';



const home = () => {
    return (
            <> 
                <Link to='/allbeers'> 
                 All Beers
                <img className="menuImg" src={beersImg}/>
                
                </Link>

                <br></br>

                <Link to='/randombeer'> Random Beer</Link>

                <br></br>

                <Link to='/newbeer'> Add Beer</Link>
                <br></br>

                </>
        );
    }

export default home;