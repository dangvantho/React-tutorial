import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddTodo.propTypes = {
    onSubmit:PropTypes.func,
};

function AddTodo(props) {
    const {onChange}=props
    const [value,setValue]=useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    function onSubmit(e){
        e.preventDefault()
        onChange(value)
        setValue('')
    }
    return (
        <div>
           <form onSubmit={onSubmit}>
               <label>Create Todo</label>
               <input type='text' value={value} onChange={handleChange} />
            </form>
        </div>
        
    );
}

export default AddTodo;