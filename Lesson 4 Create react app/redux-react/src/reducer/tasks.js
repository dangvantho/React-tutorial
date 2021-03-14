import * as types from '../constants/index'
import shortId from 'shortid'

const initialState=localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
const tasks=function(state=initialState,action){
    switch(action.type){
        case types.RENDER_TODO:
            return state
        case  types.ADD_TODO:
            var newState=[...state]
            newState.push({
                id:shortId.generate(),
                name: action.payload,
                onDone: false,
            })
            return newState
        case types.DELETE_TODO:
            var newState=[...state]
            var index=newState.findIndex(todo=>todo.id===action.payload.id)
            newState.splice(index,1)
            return newState
        case types.EDIT_TODO:
            var newState=[...state]
            var index=newState.findIndex(todo=>todo.id===action.payload.id)
            newState.splice(index,1,action.payload)
            return newState
        case types:
            return state                       
        default :
            return state   
    }
}
export default tasks