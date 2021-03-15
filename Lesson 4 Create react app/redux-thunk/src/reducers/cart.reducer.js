import * as types from '../constants/contants'

const initial={
    count: 1,
    data: [],
}
const cart=(state=initial,action)=>{
    switch(action.type){
        case types.ADD_CART:
            return {
                ...state,
                count: state.count+1,
            }
        case types.SUBTRACT_CART:
            return {
                ...state,
                count: state.count-1
            }
        case types.FETCH_DATA:
            return {
                ...state,
                data: action.payload,
            }    
        default:
            return state    
    }
}
export default cart