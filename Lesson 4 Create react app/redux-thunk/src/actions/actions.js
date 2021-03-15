import * as types from '../constants/contants'
export const addCart=()=>{
    return {
        type: types.ADD_CART
    }
}
export const subtractCart=()=>{
    return {
        type: types.SUBTRACT_CART
    }
}
export const fetchData=()=>{
    return {
        type: types.FETCH_DATA,
    }
}