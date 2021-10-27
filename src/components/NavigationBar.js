import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function NavigationBar(){

    return(
        <nav className="NavigationBar">
           
                <Link className="link" to="/description" >Campaign</Link>
                <Link className="link" to="/">Donate</Link>
            
        </nav>
    )
}