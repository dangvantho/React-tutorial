import * as types from '../constants/index'
export const add=(todo)=>{
    return {
        type:types.ADD_TODO,
        todo,
    }
}
export const status =()=>{
    return {
        type: types.TOGGLE_STATUS,
    }
}