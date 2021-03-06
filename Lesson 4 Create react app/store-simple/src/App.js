import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'

import MenuTop from './components/MenuTop'
import Product from './pages/Product'
import { useEffect, useState } from 'react'
import AppProvider from './Context/AppProvider'
import Cart from './pages/Cart'

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
      <AppProvider>
        <div className="App">
          <MenuTop/>
          <Route path='/' exact>Home</Route>
          <Route path='/products' exact>
            <Product products={products} />
          </Route>
          <Route path='/my-carts' exact>
            <Cart />
          </Route>
        </div>
      </AppProvider>
    </Router>
    
  );
}

export default App;
