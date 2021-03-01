import React,{ Component } from 'react'
import './CreateTodo.css'
class CreateTodo extends Component {
    render(){
        let name=!this.props.isZero ? 'dropdown-icon' : 'd-none'
        name+= this.props.checkAll ? ' active': ''
        return(
            <div className='row'>
                <div className={name} onClick={this.props.onCheckAll}></div>
                <input 
                   onKeyDown={this.props.onKeyDown} 
                   className='center input' 
                   placeholder='What need to be done'
                   value={this.props.value}    
                />
            </div>
        )
    }
}
export default CreateTodo