import React,{Component} from 'react'
class StepNumber extends Component {
    constructor(){
        super()
        this.state={num: 0}
    }
    add(){
        let num=this.state.num+1
        this.setState((state)=>{
            return {num: num}
        })
    }
    subtract(){
        let num=this.state.num-1
        this.setState((state)=>{
            return {num: num}
        })
    }
    render(){
        return (
            <div className='title'>
               <h3>Change Number</h3>
               <div className='row'>
                   <button onClick={this.subtract.bind(this)}>-</button>
                   <p className='d-inline mx-8' >{this.state.num}</p>
                   <button onClick={this.add.bind(this)}>+</button>
               </div>
            </div>
        )
    }
}
export default StepNumber