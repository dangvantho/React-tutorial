import React, { Component } from 'react'
import './Todo.css'
import classNames from 'classnames/bind'
class Todo extends Component {
    render() {
        const props=this.props
        return(
            <div className={classNames('todo',{done:props.isComplete})} >
               <input type='checkbox' onClick={props.onClick} 
                checked={props.isComplete} data-id={props.dataId} /> 
               {props.children}
            </div>
        )
    }
}
export default Todo