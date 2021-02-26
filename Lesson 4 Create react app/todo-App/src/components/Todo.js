import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
    render() {
        const isSmall=this.props.isSmall ? 'isSmall': ''
        return (
            <div className='col-3'>
                <img className={isSmall}  src={this.props.image} />
            </div>
        )
    }
}
export default Todo