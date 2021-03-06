import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';
import PaymentCart from '../components/PaymentCart';
import CartItem from '../components/CartItem';


Cart.propTypes = {
    
};

function Cart(props) {
    const {cart}=useContext(AppContext)
    return (
        <div className="cart container-fluid bg-light">
            <div className="mx-4 pt-4">
                <h5 className="fw-normal" >Giỏ hàng</h5>
                <div className="row  flex-wrap justify-content-between" >
                    <div className=" col-12 col-md-8 bg-white mx-md-4 ">
                        <div className="container py-4">
                        {cart.map(product=>(
                            <CartItem product={product} />
                        ))}
                        </div>
                    </div>
                    <div className=" col-6 col-md-3 mx-auto mt-4 mt-md-0 w-250 ">
                        <PaymentCart></PaymentCart>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Cart;