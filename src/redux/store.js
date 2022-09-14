
import { configureStore } from '@reduxjs/toolkit';
import categoryId from './reducers/categoryId';
import categorys from './reducers/category';
import categoryCars from './reducers/categoryCars';
import cars from './reducers/cars';
import carForEdit from './reducers/carForEdit';


const store = configureStore({
    reducer:{
        categoryId,
        categorys,
        categoryCars,
        cars,
        carForEdit,
    }
})

export default store