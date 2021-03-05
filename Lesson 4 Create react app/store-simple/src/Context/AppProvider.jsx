import React, { useState } from 'react';
import AppContext from './AppContext';


function AppProvider(props) {
    const [cart,setCart]=useState([])
    function handleCartChange(value){
        let newCart
        if(cart.length==0) newCart=[value]
        else newCart=[...cart]
        newCart.push(value)
        setCart(newCart)
    }
    return (
        <AppContext.Provider 
           value={{
               cart,
               onChangeCart:handleCartChange,
            }} 
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;