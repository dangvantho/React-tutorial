import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {addCart,subtractCart} from '../actions/actions'
import { Card, Button} from 'react-bootstrap'


CartRender.propTypes = {
    list: PropTypes.array
};

function CartRender(props) {
    const {cartList,addCart,subtractCart}=props
    // const [mess,setMess]=useState(fetchErr)
    // useEffect(()=>{
    //     console.log(fetchErr)
    //     setMess(fetchErr)
    // },[fetchErr])
    return (
        <div className="row mt-5">
            {cartList.map(data=>{
                return(
                    <div className="col-4" key={data._id}>
                        <Card>
                        <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                              <Card.Title>{data.name}</Card.Title>
                              <Card.Text>
                                {data.description}
                              </Card.Text>
                              <Button variant="primary" className="mx-3" onClick={()=>addCart()}>Add</Button>
                              <Button variant="primary" onClick={()=>subtractCart()}>Subtract</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}
const mapStateToProps=state=>{
    return {
        cartList: state.cart.data,
    }
}
const mapActionToprops=dispatch=>({
    addCart:()=> dispatch(addCart()),
    subtractCart:()=> dispatch(subtractCart()),
})

export default connect(mapStateToProps,mapActionToprops)(CartRender)