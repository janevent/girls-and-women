import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function NavigationBar(){

    return(
        <div>
           
                <Link to="/description" ></Link>
                <Link to="/donate"></Link>
            
        </div>
    )
}