import React,{Component} from 'react'
class Todo extends Component {
    render(){
        return(
            <h2>
                {this.props.textContent}
            </h2>
        )
    }
}
export default Todo