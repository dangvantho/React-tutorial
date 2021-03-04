import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'

import MenuTop from './components/MenuTop'
import Product from './pages/Product'
import { useEffect, useState } from 'react'

function App() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('https://api-products-test.herokuapp.com/api/product')
         .then(res=>{
           const data=res.data
           setProducts(data)
         }).catch(e=>console.log(e))
  },[])
  return (
    <Router>
      <div className="App">
        <MenuTop/>
        <Route path='/' exact>Home</Route>
        <Route path='/products' exact>
          <Product products={products} />
        </Route>
      </div>
    </Router>
    
  );
}

export default App;
