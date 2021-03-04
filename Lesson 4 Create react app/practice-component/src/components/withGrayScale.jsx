import React from 'react';
import PropTypes from 'prop-types';

const withGrayScale = (GrayScale,opacity) => {
    return class extends React.Component{
        render(){
            const newOpacity= opacity ? opacity: 1
            return(
                <div style={{filter:`grayscale(${newOpacity*100}%)`}}>
                <GrayScale  {...this.props}/>
               </div>
            ) 
        }
    }
};

withGrayScale.propTypes = {
    
};

export default withGrayScale;