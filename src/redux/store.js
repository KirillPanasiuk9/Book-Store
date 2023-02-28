import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import itemsListSlice from './slices/itemsListSlice'
import cartListSlice from "./slices/cartListSlice";

const rootReducer = combineReducers({
    itemsListSlice,
    cartListSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};