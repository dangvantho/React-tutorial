import React,{ Component } from 'react'
import classNames from 'classnames/bind'
import './ChangeStatus.css'
class ChangeStatus extends Component {
    constructor(props){
        super(props)
        this.state={st: this.props.status}
    }
    onClick(e){
        let status=this.state.st
        this.setState(()=>{
            return { st: status ? false: true }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.onClick.bind(this)}>
                   Click me
                </button>
                <p className={classNames({hidden: this.state.st})}>{this.props.children}</p>
            </div>
        )
    }
}
export default ChangeStatus