import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {deleteTodo,asyncDelete,toggle,getTodos} from '../store/reducers/todoSlice' 
import classNames from 'classnames'

Todo.propTypes = {
    todos:PropTypes.array,
    deleteTodo:PropTypes.func,
    asyncDelete:PropTypes.func,
    toggle:PropTypes.func,
};

function Todo(props) {
    const {todos,deleteTodo,asyncDelete,toggleTodo,showTodos,getTodos}=props
    useEffect(()=>{
        getTodos()
    },[])
    let list
    switch (showTodos) {
        case 'all':
            list=todos
            break;
        case 'active':
            list=todos.filter(todo=>!todo.completed)
            break;
        case 'completed':
            list=todos.filter(todo=>todo.completed)    
        default:
            break;
    }
    return (
        <div>
            
                {list.map(todo=>{
                    return(
                        <div 
                          className={classNames({done: todo.completed,})}
                          key={todo.id} 
                          onClick={()=>toggleTodo(todo.id)} 
                        >
                            {todo.title}
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
        showTodos:state.showTodos
    }
}
const mapActionToProps=(dispatch)=>({
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    asyncDelete: (id)=>dispatch(asyncDelete(id)),
    toggleTodo:(id)=>dispatch(toggle(id)),
    getTodos: ()=>dispatch(getTodos()),
})

export default connect(mapStateToProps,mapActionToProps)(Todo)