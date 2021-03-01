import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos:PropTypes.array,
};
TodoList.defaultProps={
    todos:[],
    onClick:null,
}
function TodoList(props) {
    const {todos,onClick}=props
    function handleClickTodo(todo){
        if(onClick){
            onClick(todo)
        }
    }
    return (
        <ul className='todos'>
            {todos.map((todo,index)=>(
                <li 
                   onClick={()=>handleClickTodo(index)} 
                   key={index}
                >
                   {todo.title} 
                </li>
            ))}
        </ul>
    );
}

export default TodoList;