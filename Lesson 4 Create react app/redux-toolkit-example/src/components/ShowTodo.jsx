import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { show } from '../store/reducers/filterSlice';

ShowTodo.propTypes = {
    
};

function ShowTodo(props) {
    const {show,showTodos}=props
    return (
        <div>
            <button onClick={()=>show('all')} disabled={showTodos==='all'}>All</button>
            <button onClick={()=>show('active')} disabled={showTodos==='active'}>Active</button>
            <button onClick={()=>show('completed')} disabled={showTodos==='completed'}>Completed</button>
        </div>
    );
}
const mapStateToProps=state=>({
    showTodos:state.showTodos,
})
const mapActionToProps=dispatch=>({
    show: value=>dispatch(show(value))
})
export default connect(mapStateToProps,mapActionToProps)(ShowTodo)