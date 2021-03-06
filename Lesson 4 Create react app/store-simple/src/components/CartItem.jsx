import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

CartItem.propTypes = {
    product:PropTypes.array,
};
CartItem.defaultProps={
    product:[],
}

function CartItem(props) {
    const fullWith={width: "100%"}
    const {product}=props
    const {onChangeProductCount}=useContext(AppContext)
    function handleChangeProductCount(e){
        let newProduct={...product}
        if(onChangeProductCount){
            if(e.target.textContent==='+') ++newProduct.count
            else{
                if(product.count==1) newProduct={}
                else --newProduct.count
            }
            onChangeProductCount(newProduct,product._id)
        }
    }
    return (
        <div className="row py-3 justify-content-between align-items-center border-bottom">
            <div className="col-9">
                <div className="row align-items-center ">
                    <div className="col-3">
                        <img src={product.img} alt="" style={fullWith} />
                    </div>
                    <div className="col-9">{product.name}</div>
                </div>
            </div>
            <div className="col-3">
                <div className="row align-items-center ">
                  <div 
                    onClick={handleChangeProductCount} 
                    className="col-4 btn btn-light"
                  >-
                  </div>
                  <p className="col-4 my-0 " >{product.count}</p>
                  <div 
                    onClick={handleChangeProductCount} 
                    className="col-4 btn btn-light"
                  >+
                  </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;