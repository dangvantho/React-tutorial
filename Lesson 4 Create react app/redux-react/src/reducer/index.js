import * as types from '../constants/index'
import tasks from './tasks'
import {combineReducers} from 'redux'

const myReducer = combineReducers({
    tasks,
})

export default myReducer