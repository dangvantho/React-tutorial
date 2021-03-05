
import './App.css';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import ToggleTheme from './Components/ToggleTheme';
import AppProvider from './Context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <ToggleTheme/>
        <Navbar/>
        <BookList/>
      </div>
    </AppProvider>
    
  );
}

export default App;
