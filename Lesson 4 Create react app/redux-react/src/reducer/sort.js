import * as types from '../constants/index'
const initialState={
    name: 'az',
    status: 'all',
}
const sortBy=(state=initialState,action)=>{
    switch(action.type){
        case types.SORT_BY_NAME:
            return {
                ...state,
                name: action.payload
            }
        case types.SORT_BY_STATUS:
            return {
                ...state,
                status: action.payload,
            }    
        default:
            return state
    }
}
export default sortBy