import React , { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { add } from '../store/reducers/todoSlice';
import shortId from 'shortid'

TodoAdd.propTypes = {
    add:PropTypes.func,
};

function TodoAdd(props) {
    const {add}=props
    const [value,setValue]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        add({
            id:shortId.generate(),
            name: value,
            completed: false,
        })
        setValue('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            </form>
        </div>
    );
}
const mapActionToProps=(dispatch)=>{
    return {
        add:(item)=>dispatch(add(item))
    }
}

export default connect(null,mapActionToProps)(TodoAdd)