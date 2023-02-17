import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import itemsListSlice from './slices/itemsListSlice'

const rootReducer = combineReducers({
    itemsListSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};