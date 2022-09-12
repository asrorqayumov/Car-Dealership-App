
import { configureStore } from '@reduxjs/toolkit';
import categoryId from './reducers/categoryId';
import categorys from './reducers/category';
import categoryCars from './reducers/categoryCars';
import cars from './reducers/cars';


const store = configureStore({
    reducer:{
        categoryId,
        categorys,
        categoryCars,
        cars,
    }
})

export default store