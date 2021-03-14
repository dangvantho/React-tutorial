import './App.css';
import EditForm from './components/EditForm';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container">
      <TodoForm  />
      <div className="container">
        <div className="row mt-4">
          <EditForm/>
          <TodoList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
