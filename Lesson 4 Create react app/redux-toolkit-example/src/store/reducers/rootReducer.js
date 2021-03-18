import {combineReducers} from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import todosReducer from './todoSlice'
const rootReducer=combineReducers({
    todos:todosReducer,
    showTodos: filterSlice,
})
export default rootReducer