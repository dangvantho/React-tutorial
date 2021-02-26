import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
function App() {
  return (
    <div className="App">
      <Todo textContent="Đi ăn cơm" />
      <Todo textContent="Học bài" />
      <Todo textContent="Đi chơi" />

    </div>
  );
}

export default App;
