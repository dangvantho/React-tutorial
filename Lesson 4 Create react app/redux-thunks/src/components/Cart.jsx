import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {loadingMessage,fetchError} from '../actions/actions'
import CartRender from './CartRender'
import fetchProduct from '../api/fetch.product'

Cart.propTypes = {
    
};

function Cart(props) {
    const {cart,fetch,loadingMessage}=props
    function fn(){
        loadingMessage()
        fetch()
    }
    return (
        <div className="container">
            <div className=" mt-3 d-flex justify-content-center">
                Số lượng trong giỏ: {cart.count}
            </div>
            <div className=" mt-5 d-flex justify-content-center">
                <button className="row btn btn-primary px-4 mx-2" onClick={()=>fn()} >
                    Get data
                </button>
                {cart.isLoading? 'Loading....': ''}
                {cart.fetchError}
            </div>
            <CartRender/>
            
        </div>
    );
}
const mapStateToProps=state=>{
    return {
        cart: state.cart
    }
}
const mapActionToprops=dispatch=>({
    fetch: fetchProduct(dispatch),
    loadingMessage: ()=>dispatch(loadingMessage())
})

export default connect(mapStateToProps,mapActionToprops)(Cart)