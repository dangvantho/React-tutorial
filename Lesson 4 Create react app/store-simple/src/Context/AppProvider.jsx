import React, { useState } from 'react';
import AppContext from './AppContext';


function AppProvider(props) {
    const initialCart=JSON.parse(localStorage.getItem('cart'))||[]
    console.log(initialCart.length)
    const [cart,setCart]=useState(initialCart)

    //Add product to Cart
    function handleCartChange(value){
        let newValue={...value, count:1,}
        let newCart
        if(cart.length==0) newCart=[newValue]
        else{
            let index=cart.findIndex(product=>product._id==value._id)
            if(index==-1){
                newCart=[...cart]
                newCart.push(newValue)
                console.log(newCart)
            }
            else{
                ++cart[index].count
                newCart=[...cart]
            }
        }
        
        localStorage.setItem('cart',JSON.stringify(newCart))
        setCart(newCart)
    }
    //Add or remove Product from Cart
    function handleChangeProductCount(value,id){
        let newCart
        const index=cart.findIndex(product=>product._id===id)
        if(JSON.stringify(value)==='{}'){
            newCart=[...cart]
            newCart.splice(index,1)
        }
        else {
            cart[index].count=value.count
            newCart=[...cart]
        }
        setCart(newCart)
    }

    //Payment 
    function handlePayMoney(){
        console.log(cart)
    }

    return (
        <AppContext.Provider 
           value={{
               cart,
               onChangeCart:handleCartChange,
               onPayMoney:handlePayMoney,
               onChangeProductCount:handleChangeProductCount,
            }} 
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;