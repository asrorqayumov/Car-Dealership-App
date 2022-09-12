import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { GetCars } from "../../api/requests";

export const GetAllCars = createAsyncThunk(
    'GetAllCars',
    async(payload)=>{
        return GetCars()
    }
)

export const categoryTypesSlice = createSlice({
    name:'Cars',
    initialState:{cars:[],status:''},
    extraReducers:{
        [GetAllCars.pending]:(state,action)=>{
          state.status  = 'pending'
        },
       [GetAllCars.fulfilled]:(state,action)=>{
        state.status = 'success';
        state.cars = action.payload
       },
       [GetAllCars.rejected]:(state,action)=>{
        state.status = 'failed'
       }
    }
})

export default categoryTypesSlice.reducer