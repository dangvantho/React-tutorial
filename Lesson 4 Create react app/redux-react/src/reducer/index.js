import tasks from './tasks'
import editForm from './edit.form'
import sortBy from './sort'
import {combineReducers} from 'redux'

const myReducer = combineReducers({
    tasks,
    editForm,
    sortBy,
})

export default myReducer