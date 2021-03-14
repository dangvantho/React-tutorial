import * as types from '../constants/index'
import tasks from './tasks'
import editForm from './edit.form'
import {combineReducers} from 'redux'

const myReducer = combineReducers({
    tasks,
    editForm,
})

export default myReducer