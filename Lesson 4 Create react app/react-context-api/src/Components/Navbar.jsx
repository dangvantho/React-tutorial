import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

Navbar.propTypes = {
    
};

function Navbar(props) {
    const {isLight,dark,light}=useContext(AppContext)
    const theme=isLight ? light : dark
    return (
        <div 
           className="navbar" 
           style={{background:theme.ui,color:theme.syntax}}
        >
            <h1>Context app</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>ABout</li>
            </ul>
        </div>
        
    );
}

export default Navbar;