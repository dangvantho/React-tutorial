import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todoList,setTodoList]=useState([{
    name:'đi chơi',
    onDone: false,
  }])
  return (
    <div className="App container">
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
