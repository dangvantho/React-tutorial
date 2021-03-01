import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo.jsx'
import CreateTodo from './components/CreateTodo'
import classNames from 'classnames/bind'
import Header from './components/Header';
import Option from './components/Option';

let currentList=[]
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
      value:'',
      selection:{
        all:true,
        active:false,
        complete:false,
      },
      hasComplete:false,
    }
  }
   componentDidMount(){
     currentList=this.state.todoList
     console.log(currentList,this.state.todoList)
     let hasComplete=this.checkComplete()
     this.setState({hasComplete})
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
      //let hasComplete=this.checkComplete()
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
      currentList=todoList
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
  onSelected(e){
    let todoList
    let select=e.target.textContent.toLowerCase()
    const selection = {all:false,active:false,complete:false}
    if(select==='active') todoList=currentList.filter(todo=>!todo.isComplete)
    else if(select==='complete') todoList=currentList.filter(todo=>todo.isComplete)
    else todoList=currentList
    this.setState((state,props)=>{
      return {
        selection: {...selection,[select]:true},
        todoList,
      }
    })
  }
  checkComplete(){
    var check=this.state.todoList.find(todo=>todo.isComplete)
    if(check===false) return true
    return false
  }
  //Delete todos when click "Clear complete"
  deleteSelected(){
    let list=this.state.todoList
    let todoList=list.filter(todo=>!todo.isComplete)
    
    if(todoList.length>0) currentList=todoList
    this.setState({todoList})
  }
  render(){
    
    let todoList=this.state.todoList
    const {selection,hasComplete}=this.state
    console.log(todoList,currentList)
    return (
      <div className="App">
        <Header>todos</Header>
        <div className='container'>
          <CreateTodo 
            isZero={this.state.isZero} 
            value={this.state.value}
            checkAll={this.state.isCheckAll}
            onCheckAll={this.onCheckAll(this.state.isCheckAll)}
            onKeyDown={this.onKeyDown.bind(this)}
          />
          <div className='line'/>
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
          <Option
            items={currentList.length}
            selection={selection}
            onClickSelected={this.onSelected.bind(this)}
            clearItems={hasComplete}
            deleteSelected={this.deleteSelected.bind(this)}
          />
        </div>
        
        
      </div>
      
    );
  }
  
}

export default App;
