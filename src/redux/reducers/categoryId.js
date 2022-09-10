import { createSlice } from "@reduxjs/toolkit";

export const categoryIdSlice = createSlice({
    name:'categoryId',
    initialState:{id:''},
    reducers:{
        setCategoryId: (state,action)=>{
          state.id = action.payload
        },
    }
})
export const {setCategoryId} = categoryIdSlice.actions
export default categoryIdSlice.reducer