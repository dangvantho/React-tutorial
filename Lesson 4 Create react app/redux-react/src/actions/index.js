import * as types from '../constants/index'
export const add=(todo)=>{
    return {
        type:types.ADD_TODO,
        payload: todo,
    }
}
export const toggleForm =(index,todo)=>{
    return {
        type: types.TOGGLE_OPEN_FORM,
        payload:{index,todo}
    }
}
export const closeForm=()=>{
    return {
        type: types.CLOSE_FORM
    }
}
export const deleteTodo =id=>{
    return {
        type:types.DELETE_TODO,
        payload: id,
    }
}
export const editTodo= (id,value)=>{
    return {
        type: types.EDIT_TODO,
        payload: {id, value}
    }
}
