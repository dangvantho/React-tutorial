import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const url='https://jsonplaceholder.typicode.com/todos?_limit=6'
export const getTodos= createAsyncThunk('todos/todosFetched',async ()=>{
    const res=await axios.get(url)
    return res.data
})
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
        toggle:(state,action)=>{
            const index=state.findIndex(todo=>todo.id===action.payload)
            state[index].completed=!state[index].completed
        }
    },
    extraReducers:{
        [getTodos.pending]: ()=>console.log('Pending....'),
        [getTodos.fulfilled]:(state,action)=>{
            console.log(action)
            return action.payload
        },
        [getTodos.rejected]: ()=>console.log('Fetched failure!!!')
    }
})
export const {add,deleteTodo,update,toggle}=todoSlice.actions
export const asyncDelete=id=>dispatch=>{
    setTimeout(()=>{
        dispatch(todoSlice.actions.deleteTodo(id))
    },3000)
}
export default todoSlice.reducer