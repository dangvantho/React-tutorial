import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import StepNumber from './components/StepNumber';
import withGrayScale from './components/withGrayScale';
function Home(){
  return(
    <div >
      <StepNumber/>
    </div>
  )
}
const About=()=>(<div>About</div>)
const Contact=()=>(<div>Contact</div>)
const GrayScale=({src})=>(<img src={src} alt='img' />)
const HigherOrderComponent=withGrayScale(GrayScale)
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
          <Route path='/Contact' exact >
            <HigherOrderComponent 
              src="https://picsum.photos/200/300"
            />   
          </Route>
          <Route path ='/About' component={About}/>
        </div>
      </div>
    </Router>
  );
}

export default App;