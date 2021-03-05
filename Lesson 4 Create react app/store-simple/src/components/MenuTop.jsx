import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
      <Navbar color="light" light expand="md" className="py-3 mb-2">
        <Link to='/'> HelloShop</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse className="d-flex justify-content-between" isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
            <NavItem>
              <Link className="nav-link-edit" to='/' >Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-edit" to='/products' >Products</Link>
            </NavItem>
          </Nav>
          <Nav className=" me-4 position-relative" navbar>
            <NavItem className="cart-count position-absolute" >
              {cart.length}
            </NavItem>
            <NavItem>
              <FontAwesomeIcon 
                icon={faCartArrowDown} 
                size='2x'
                color="blue" 
              />
            </NavItem>
            <NavItem className="px-3 d-flex align-items-center" >Giỏ hàng</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuTop;