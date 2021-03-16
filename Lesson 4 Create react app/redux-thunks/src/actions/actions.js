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
export const fetchData=data=>{
    return {
        type: types.FETCH_DATA,
        payload:data,
    }
}
export const loadingMessage=()=>{
    return {
        type: types.LOADING_MESSAGE
    }
}
export const fetchError=()=>{
    return {
        type: types.FETCH_ERROR
    }
}