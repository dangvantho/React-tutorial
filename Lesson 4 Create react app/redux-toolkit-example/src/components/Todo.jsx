import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {deleteTodo,asyncDelete} from '../store/reducers/todoSlice' 
import shortId from 'shortid'
import TodoAdd from './TodoAdd';

Todo.propTypes = {
    todos:PropTypes.array,
    deleteTodo:PropTypes.func,
    asyncDelete:PropTypes.func,
};

function Todo(props) {
    const {todos,deleteTodo,asyncDelete}=props
    return (
        <div>
            <TodoAdd/>
                {todos.map(todo=>{
                    return(
                        <div key={todo.id} >
                            {todo.name}
                            <button onClick={()=>deleteTodo(todo.id)} >Xóa</button>
                            <button onClick={()=>asyncDelete(todo.id)} >Xóa as</button>
                        </div>
                    )
                })}
            
        </div>
    );
}
const mapStateToProps=state=>{
    return {
        todos:state.todos,
    }
}
const mapActionToProps=(dispatch)=>({
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    asyncDelete: (id)=>dispatch(asyncDelete(id)),
})

export default connect(mapStateToProps,mapActionToProps)(Todo)