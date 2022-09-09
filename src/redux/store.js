
import { configureStore } from '@reduxjs/toolkit';
import counter from './reducers/counter';
import student from './reducers/student';


const store = configureStore({
    reducer:{
        counter,
        student,
    }
})

export default store