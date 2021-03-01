import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box'
import Todo from './components/Todo/TodoList'
import { useState } from 'react';

const initialTodos=[
  {id:238232, title:'Đi chơi'},
  {id:321213, title:'Đi câu cá'}
]
function App() {
  const [todos,setTodos]=useState(initialTodos)
  function handleClickTodo(index){
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Box />
      <Todo todos={todos} onClick={handleClickTodo} />
    </div>
  );
}

export default App;
