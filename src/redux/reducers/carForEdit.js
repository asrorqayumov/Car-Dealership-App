import { createSlice } from "@reduxjs/toolkit";

export const CarForEdit = createSlice({
    name:'Cars',
    initialState:{car:null},
    reducers:{
      setCar:(state,action)=>{
        state.car = action.payload
      }
    }
})

export const {setCar} = CarForEdit.actions
export default CarForEdit.reducer