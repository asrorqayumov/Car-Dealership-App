import { createSlice } from "@reduxjs/toolkit";

export const categoryIdSlice = createSlice({
    name:'categoryId',
    initialState:{id:'',name:''},
    reducers:{
        setCategoryId: (state,action)=>{
          state.id = action.payload.id;
          state.name = action.payload.name;
        },
    }
})
export const {setCategoryId} = categoryIdSlice.actions
export default categoryIdSlice.reducer