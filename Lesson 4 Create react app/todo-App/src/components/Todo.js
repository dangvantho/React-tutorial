import React, { Component } from 'react'
import './Todo.css'
import classNames from 'classnames/bind'
class Todo extends Component {
    render() {
        const {isComplete,onClick,children,dataId}=this.props
        return(
            <div className={classNames('todo',{done:isComplete})} >
               <input type='checkbox' onClick={onClick} 
                checked={isComplete} data-id={dataId} /> 
               {children}
            </div>
        )
    }
}
export default Todo