import React from 'react';
import ShowTodo from './components/ShowTodo';
import Todo from './components/Todo';
import TodoAdd from './components/TodoAdd';

function App() {
  return (
    <div className="App">
      <TodoAdd/>
      <Todo/>
      <ShowTodo/>
    </div>
  );
}

export default App;
