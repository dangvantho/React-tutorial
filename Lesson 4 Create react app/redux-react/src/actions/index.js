import * as types from '../constants/index'
export const add=(todo)=>{
    return {
        type:types.ADD_TODO,
        payload: todo,
    }
}
export const toggleForm =todo=>{
    return {
        type: types.TOGGLE_OPEN_FORM,
        payload:{todo}
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
export const editTodo= value=>{
    return {
        type: types.EDIT_TODO,
        payload: { ...value}
    }
}
export const sortByName=(value)=>{
    return {
        type:types.SORT_BY_NAME,
        payload: value
    }
}
export const sortByStatus=value=>{
    return {
        type: types.SORT_BY_STATUS,
        payload:value,
    }
}
