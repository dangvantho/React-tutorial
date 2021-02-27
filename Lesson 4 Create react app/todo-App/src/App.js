import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo'
import ChangeStatus from './components/ChangeStatus'
import StepNumber from './components/StepNumber'
class App extends Component {
  constructor(){
    super()
    this.state={
      todoList:[
        {id: 0, title:'Đi học',isComplete: false},
        {id: 1, title:'Tập thể dục',isComplete: true},
        {id: 2, title:'Đi ăn',isComplete: false}
      ]
    }
  }
  onClick(e){
    let id=e.target.dataset.id
    let todoList=this.state.todoList
    if(todoList[id].isComplete) todoList[id].isComplete=false
    else todoList[id].isComplete=true
    console.log(todoList)
    this.setState({todoList})
  }
  
  render(){
    return (
      <div className="App">
        {this.state.todoList.map((item,index)=>{
          return <Todo isComplete={item.isComplete} dataId={index} change={this.state.one} key={index}
           onClick={this.onClick.bind(this)} >
            {item.title}
          </Todo>
        })}
        <ChangeStatus status={true} > Click to see what happend</ChangeStatus>
        <ChangeStatus status={true} > Click to see what happend</ChangeStatus>
        <StepNumber></StepNumber>
      </div>
      
    );
  }
  
}

export default App;
