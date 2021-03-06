import React, { useContext, useState } from 'react';
import classNames from 'classnames'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Row,
  Col,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import './MenuTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../Context/AppContext';


const MenuTop = (props) => {
  const {cart}= useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md" className="py-3 text-white">
        <Link className='text-white' to='/'> HelloShop</Link>
        <NavbarToggler className='text-white bg-light' onClick={toggle} />
        <Collapse className=" justify-content-between" isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
            <NavItem>
              <Link className="nav-link-edit text-white" to='/' >Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-edit text-white" to='/products' >Products</Link>
            </NavItem>
            <NavItem className="d-md-none" >
              <Link className="nav-link-edit text-white" to='/my-carts' >Cart {cart.length}</Link>
            </NavItem>
          </Nav>
          <Nav className="" navbar>
            <Link to='/my-carts'className="d-none d-md-flex me-4 position-relative" >
              <NavItem className="cart-count position-absolute text-white" >
                {cart.length}
              </NavItem>
              <NavItem>
                <FontAwesomeIcon 
                  icon={faCartArrowDown} 
                  size='2x'
                  color="white" 
                />
              </NavItem>
              <NavItem className="px-3 d-flex align-items-center text-white" >Giỏ hàng</NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuTop;