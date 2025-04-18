import { configureStore } from '@reduxjs/toolkit';
import filtAReducer from './filterAllSlice';

const store = configureStore({
    reducer: {
        filtA: filtAReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;