import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {addCart,subtractCart,fetchData} from '../actions/actions'

Cart.propTypes = {
    
};

function Cart(props) {
    const {cart,addCart,subtractCart,fetchData}=props
    function handleAddCart(){
        addCart()
    }
    function handleSubtractCart(){
        subtractCart()
    }
    function handleFetchData(){
        fetchData()
    }
    return (
        <div>
            <button className="btn btn-primary px-4 mx-2" onClick={()=>handleAddCart()} >
                Add
            </button>
               {cart.count}
            <button className="btn btn-primary px-4 mx-2" onClick={()=>handleSubtractCart()} >
                Subtract
            </button>
            <div>
                <button className="btn btn-primary px-4 mx-2" onClick={()=>handleFetchData()} >
                    Get data
                </button>
            </div>
            
        </div>
    );
}
const mapStateToProps=state=>{
    return {
        cart: state.cart
    }
}
const mapActionToprops={
    addCart,
    subtractCart,
    fetchData,
}

export default connect(mapStateToProps,mapActionToprops)(Cart)