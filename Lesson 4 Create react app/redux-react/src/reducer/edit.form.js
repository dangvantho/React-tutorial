import * as types from '../constants/index'
const initialState={
    isOpen: false,
    todo: {},
    index: 0,
}
const editForm=(state=initialState,action)=>{
    switch (action.type){
        case types.TOGGLE_OPEN_FORM:
            console.log(action.payload)
            return {
                ...state,
                isOpen: state.isOpen ? true: true,
                todo: action.payload.todo,
                index: action.payload.index
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