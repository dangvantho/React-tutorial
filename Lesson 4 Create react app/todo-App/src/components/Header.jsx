import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    children:PropTypes.string
};

export default Header;