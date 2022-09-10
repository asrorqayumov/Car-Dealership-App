
import { configureStore } from '@reduxjs/toolkit';
import categoryId from './reducers/categoryId';
import categorys from './reducers/category';
import categoryCars from './reducers/categoryCars'


const store = configureStore({
    reducer:{
        categoryId,
        categorys,
        categoryCars,
    }
})

export default store