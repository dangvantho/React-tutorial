import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import StepNumber from './components/StepNumber';
function Home(){
  return(
    <div >
      <StepNumber/>
    </div>
  )
}
const About=()=>(<div>About</div>)
const Contact=()=>(<div>Contact</div>)
function App() {
  return (
    <Router >
      <div >
        <div className='menu'>
          <Link className='menu-link' to='/'>Home</Link>
          <Link className='menu-link' to='/Contact'>Contact</Link>
          <Link className='menu-link' to='/About'>About</Link>
        </div>
        <div className="container">
          <Route path='/' exact component={Home}/>
          <Route path='/Contact' exact component={Contact}/>
          <Route path ='/About' component={About}/>
        </div>
      </div>
    </Router>
  );
}

export default App;