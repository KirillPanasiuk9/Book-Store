import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const itemsListReducer = createSlice({
    name: "itemsListReducer",
    initialState,
    reducers: {

    }
})



export default itemsListReducer.reducer