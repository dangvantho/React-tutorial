import * as types from '../constants/index'
const initialState={
    isOpen: false,
    todo: {},
}
const editForm=(state=initialState,action)=>{
    switch (action.type){
        case types.TOGGLE_OPEN_FORM:
            return {
                ...state,
                isOpen: true,
                todo: action.payload.todo,
            }
        case types.CLOSE_FORM:
            return {
                ...state,
                isOpen: false,
            }    
        default:
            return state    
    }
}
export default editForm