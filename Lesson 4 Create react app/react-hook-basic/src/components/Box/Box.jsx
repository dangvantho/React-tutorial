import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Box.css'
Box.propTypes = {
   colorArray:PropTypes.array 
};
Box.defaultProps=['red','yellow','green','black','deepink']
function rundomColor(props){
    const rundom=Math.floor(Math.random()*4)
    return props[rundom]
}
function Box(props) {
    const initialColor=localStorage.getItem('color') || rundomColor(props)
    const [color,setColor]=useState(initialColor)  
    function handleChange(){
        const newColor=rundomColor(props)
        setColor(newColor)
        localStorage.setItem('color',newColor)
    }
    return (
        <div 
          className='box' 
          style={{backgroundColor:color}}
          onClick={handleChange}
        >
            Click to change color
        </div>
    );
}

export default Box;
