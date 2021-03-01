import React, { Component } from 'react'
import './Todo.css'
import deleteImg from '../asset/img/delete.svg'
import classNames from 'classnames/bind'
class Todo extends Component {
    render() {
        const {isComplete,onClick,children,isDelete}=this.props
        let name=isComplete ? 'checkImg checkbox': 'checkbox'
        return(
            <div className={classNames('row','boder-bottom',{done:isComplete})}  >
               <div 
                   type='checkbox' 
                   className={name}
                   onClick={onClick}
                /> 
               <p className='center'>{children}</p>
               <img src={deleteImg} className="deleteImg" onClick={isDelete} width={22} />
            </div>

        )
    }
}
export default Todo