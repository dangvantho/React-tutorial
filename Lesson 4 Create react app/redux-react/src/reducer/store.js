import {createStore} from 'redux'
const initialState={
    todoList:[
        {name:'Đi chơi', onDone: false,}
    ],
    status:false
}
const myReducer=(state=initialState,action)=>{
    if(action.type==='TOGGLE_STATUS') {
        state.status=!state.status
        return state
    }
    else if(action.type=='ADD_TODO') {
        const newTodoList=[...state.todoList]
        newTodoList.push(action.todo)
        let newState={...state,todoList:newTodoList}
        return newState
    }
}

const store=createStore(myReducer)
console.log('0',store.getState())

//Change Status
const action={type:'TOGGLE_STATUS'}
store.dispatch(action)
console.log('1',store.getState())

//Change todoList
const addAction={
    type:'ADD_TODO',
    todo:[
        {name:'học bài', onDone:false,}
    ],
}
store.dispatch(addAction)
console.log('2',store.getState())