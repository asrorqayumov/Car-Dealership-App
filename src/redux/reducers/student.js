import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk(
    'getStudent',
    async(payload)=>{
        return fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
    }
)

export const studentSlice = createSlice({
    name:'student',
    initialState:{student:[],status:''},
    extraReducers:{
        [getStudent.pending]:(state,action)=>{
          state.status  = 'pending'
        }
    }
})
export const {} = studentSlice.actions
export default studentSlice.reducer