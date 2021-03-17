import {createSlice} from '@reduxjs/toolkit'

const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers :{
        add:(state,action)=>{ 
            state.push(action.payload) 
        },
        deleteTodo:(state,action)=>{ 
            const index=state.findIndex(todo=>todo.id===action.payload)
            state.splice(index,1) 
        },
        update: (state,action)=>{
            const index=state.findIndex(todo=>todo.id===action.payload.todo.id)
            state[index]=action.payload.todo
        },
    },
})
export const {add,deleteTodo,update}=todoSlice.actions
export const asyncDelete=id=>dispatch=>{
    setTimeout(()=>{
        console.log('run')
        dispatch(todoSlice.actions.deleteTodo(id))
    },3000)
}
export default todoSlice.reducer