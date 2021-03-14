import * as types from '../constants/index'

const initialState=localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
const tasks=function(state=initialState,action){
    switch(action.type){
        case types.RENDER_TODO:
            return state
        case  types.ADD_TODO:
            var newState=[...state]
            newState.push({
                name: action.payload,
                onDone: false,
            })
            return newState
        case types.DELETE_TODO:
            var newState=[...state]
            newState.splice(action.payload,1)
            return newState
        case types.EDIT_TODO:
            var newState=[...state]
            console.log(action.payload)
            newState.splice(action.payload.id,1)
            newState.push(action.payload.value)
            return newState
        case types:
            return state                       
        default :
            return state   
    }
}
export default tasks