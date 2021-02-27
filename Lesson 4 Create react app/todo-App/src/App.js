import './App.css';
import Todo from './components/Todo'
import React, { Component } from 'react'
const todoList=[
  {id: 0, title:'Đi học',isComplete: false},
  {id: 1, title:'Tập thể dục',isComplete: true},
  {id: 2, title:'Đi ăn',isComplete: false}
]
class App extends Component {
  constructor(){
    super()
    this.state={...todoList}
  }
  onClick(e){
    let id=e.target.dataset.id
    console.log(id)
    if(todoList[id].isComplete) todoList[id].isComplete=false
    else todoList[id].isComplete=true
    console.log(todoList)
    this.setState({...todoList})
  }
  createArray(obj){
    let arr=[]
    for(let i in obj){
      arr.push(obj[i])
    }
    return arr
  }
  render(){
    return (
      <div className="App">
        {this.createArray(this.state).map((item,index)=>{
          return <Todo isComplete={item.isComplete} dataId={index} change={this.state.one} key={index}
           onClick={this.onClick.bind(this)} >
            {item.title}
          </Todo>
        })}
      </div>
    );
  }
  
}

export default App;
