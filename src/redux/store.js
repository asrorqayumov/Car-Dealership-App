
import { configureStore } from '@reduxjs/toolkit';
import counter from './reducers/counter';


const store = configureStore({
    reducer:{
        counter,
        student:'student',
    }
})

export default store