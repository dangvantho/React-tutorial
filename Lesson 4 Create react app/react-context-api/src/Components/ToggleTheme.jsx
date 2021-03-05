import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

ToggleTheme.propTypes = {
    onChangeTheme: PropTypes.func,
};
ToggleTheme.defaultProps={
    onChangeTheme:null
}

function ToggleTheme(props) {
    const {onChangeTheme}=useContext(AppContext)
    return (
        <button onClick={onChangeTheme} >
            Click to change Theme
        </button>
    );
}

export default ToggleTheme;