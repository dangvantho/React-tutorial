import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box'
import Todo from './components/Todo/TodoList'
import { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'

const initialTodos=[
  {id:238232, title:'Đi chơi'},
  {id:321213, title:'Đi câu cá'}
]
function randomNumber(todos){
  let random=Math.floor(Math.random()*10000000)
  if(todos.find(todo=>todo.id===random)) return randomNumber(todos)
  else return random
}
function App() {
  const [todos,setTodos]=useState(initialTodos)
  function handleClickTodo(index){
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  function handleAddTodo(value){
    const newTodos=[...todos]
    const todo={
      id:randomNumber(todos),
      title: value
    }
    newTodos.push(todo)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Box />
      <AddTodo  onChange={handleAddTodo} />
      <Todo todos={todos} onClick={handleClickTodo}  />
    </div>
  );
}

export default App;
