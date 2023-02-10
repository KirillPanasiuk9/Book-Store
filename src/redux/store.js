import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import itemsListReducer from './slices/itemsListSlice'

const rootReducer = combineReducers({
    itemsListReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};