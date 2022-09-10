import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { GetCategoryCarsRequest } from "../../api/requests";

export const GetCategoryCars = createAsyncThunk(
    'GetCategoryCars',
    async(payload)=>{
        return GetCategoryCarsRequest()
    }
)

export const categoryTypesSlice = createSlice({
    name:'categoryCars',
    initialState:{categorys:[],status:''},
    extraReducers:{
        [GetCategoryCars.pending]:(state,action)=>{
          state.status  = 'pending'
        },
       [GetCategoryCars.fulfilled]:(state,action)=>{
        state.status = 'success';
        state.categorys = action.payload
       },
       [GetCategoryCars.rejected]:(state,action)=>{
        state.status = 'failed'
       }
    }
})

export default categoryTypesSlice.reducer