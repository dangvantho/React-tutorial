import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

PaymentCart.propTypes = {
    
};

function PaymentCart(props) {
    const {onPayMoney}=useContext(AppContext)
    return (
        <React.Fragment>
            <div className="mb-3 bg-white">
                <p className="mb-0 p-2 " >Tiki khuyến mãi</p>
                <p className="mb-0 px-2 pb-4 text-primary">
                    Chọn mã giảm giá
                </p>
            </div>
            <div className="mb-3 px-2 py-3 bg-white">
                <div className="row mx-0 justify-content-between border-bottom">
                    <div className="col-7">Tạm tính</div>
                    <div className="col-4">78000đ</div>
                </div>
                <div className="row m-0 pt-3 justify-content-between border-bottom">
                    <div className="col-7">Thành tiền</div>
                    <div className="col-4">
                        <span className="text-red">78000đ</span>
                    </div>
                </div>
            </div>
            <div className="payment rounded-pill" onClick={onPayMoney}>
                <div className="d-flex justify-content-center m-2 py-2 ">
                    Tiến hành đặt hàng
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default PaymentCart;