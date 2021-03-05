import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

BookList.propTypes = {
    
};

function BookList(props) {
    const {isLight,dark,light}=useContext(AppContext)
    const theme=isLight ? light : dark
    return (
        <ul 
          className="book-list"
          style={{background: theme.bg, color:theme.syntax}}
        >
            <li style={{background:theme.ui}} >The king</li>
            <li style={{background:theme.ui}} >Harry Potter</li>
            <li style={{background:theme.ui}} >The winds</li>
        </ul>
    );
}

export default BookList;