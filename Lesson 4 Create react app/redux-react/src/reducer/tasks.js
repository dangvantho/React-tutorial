import * as types from '../constants/index'

const initialState=[]
const tasks=function(state=initialState,action){
    switch(action.type){
        case types.RENDER_TODO:
            return state
        default :
            return state   
    }
}
export default tasks