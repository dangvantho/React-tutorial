import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo'
import CreateTodo from './components/CreateTodo'
import classNames from 'classnames/bind'
class App extends Component {
  constructor(){
    super()
    this.state={
      todoList:[
        { title:'Đi học',isComplete: false},
        { title:'Tập thể dục',isComplete: true},
        { title:'Đi ăn',isComplete: false}
      ],
      isCheckAll:false,
      isZero: false,
      value:''
    }
  }
  onKeyDown(event){
    let value=this.state.value
    if(event.key==='Backspace') value=value.slice(0,value.length-1)
    else if(event.key==='Shift') value=value
    else if(event.key==='Enter') {
      let todoList=this.state.todoList
      todoList.push({
        title: value,
        isComplete: false
      })
      this.setState({todoList,value:''})
      return
    }
    else value+=event.key
    //let isZero=this.props.isComplete
    this.setState({value})
  }
  onClick(index){
    return (event)=>{
      let todoList=this.state.todoList
      todoList[index].isComplete=!todoList[index].isComplete
      let isCheckAll=true
      for(let todo of todoList){
        if(todo.isComplete===false){
          isCheckAll=false
          break
        }
      }
      this.setState({todoList,isCheckAll})
    }
  }
  destroy(index){
    return (event)=>{
      let todoList=this.state.todoList
      todoList.splice(index,1)
      this.setState({todoList})
    }
  }
  onCheckAll(status){
    return (event)=>{
      let isCheckAll=!status
      let todoList=this.state.todoList
      todoList.forEach(todo=>todo.isComplete=isCheckAll)
      this.setState({isCheckAll,todoList})
    }
  }
  render(){
    let todoList=this.state.todoList
    return (
      <div className="App">
        <CreateTodo 
          isZero={this.state.isZero} 
          value={this.state.value}
          checkAll={this.state.isCheckAll}
          onCheckAll={this.onCheckAll(this.state.isCheckAll)}
          onKeyDown={this.onKeyDown.bind(this)}
        />
        <div className={classNames('d-block',{dnone: this.state.isZero})}>
            {todoList.map((item,index)=>{
              return <Todo 
               isComplete={item.isComplete} 
               key={index}
               isDelete={this.destroy(index)}
               todoList={todoList}
               onClick={this.onClick(index)} >
                {item.title}
              </Todo>
            })
              }
        </div>
        
      </div>
      
    );
  }
  
}

export default App;
