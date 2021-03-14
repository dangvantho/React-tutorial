import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux'
import {add} from '../actions/index'

TodoForm.propTypes = {
    onSubmit:PropTypes.func,

};
TodoForm.defaultProps={
    onSubmit:null,
}

function TodoForm(props) {
    const {onSubmit}=props
    const [value,setValue]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        setValue('')
        onSubmit(value)
    }
    function handleChange(e){
        const newValue=e.target.value
        setValue(newValue)
    }
    return (
        <form onSubmit={handleSubmit} className="my-4 d-flex justify-content-center align-items-center" >
            <label htmlFor="" className="pe-2">Thêm công việc: </label>
            <input type="text" onChange={handleChange} value={value}/>
            <input type="submit" className="btn btn-primary mx-2 px-5" value="Add" />
        </form>
    );
}
const mapActionToProps={
    onSubmit: add,
}

export default connect(null,mapActionToProps)(TodoForm);