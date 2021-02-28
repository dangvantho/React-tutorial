import React,{Component} from 'react'
class RefInputElement extends Component{
    constructor(props){
        super(props)
        this.inputElement=React.createRef()
    }
    componentDidMount(){
        //this.inputElement.current.focus()
    }
    handleFocus(event){
        this.inputElement.current.focus()
    }
    render(){
        return(
            <div className='row'>
                <input 
                   className='col-2'
                   type='text'
                   ref={this.inputElement}
                />   
                <button onClick={this.handleFocus.bind(this)}>
                    Focus on input
                </button>
                   
            </div>
        )
    }
}
export default RefInputElement