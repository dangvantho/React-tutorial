import {createSlice} from '@reduxjs/toolkit'

const filterSlice=createSlice({
    name: 'filter',
    initialState:'all',
    reducers:{
        show: (state,action)=>action.payload
    }
})
export const {show}=filterSlice.actions
export default filterSlice.reducer