import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { GetCategorys } from "../../api/requests";

export const getCategory = createAsyncThunk(
    'getCategory',
    async(payload)=>{
        return GetCategorys()
    }
)

export const categorySlice = createSlice({
    name:'category',
    initialState:{categorys:[],status:''},
    extraReducers:{
        [getCategory.pending]:(state,action)=>{
          state.status  = 'pending'
        },
       [getCategory.fulfilled]:(state,action)=>{
        state.status = 'success';
        state.categorys = action.payload
       },
       [getCategory.rejected]:(state,action)=>{
        state.status = 'failed'
       }
    }
})

export default categorySlice.reducer