import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const itemsListSlice = createSlice({
    name: "itemsListReducer",
    initialState,
    reducers: {

        isDataFetching(state) {
            state.isLoading = true;
            state.isError = false;
        },

        isDataFetchingSuccess(state, action) {
            state.items = action.payload
            state.isLoading = false;
            state.isError = false
            console.log(action.payload);
        },

        isDataFetchingError(state) {
            state.isLoading = false;
            state.isError = true;
        },
    }

})



export default itemsListSlice.reducer
export const {isDataFetching, isDataFetchingSuccess, isDataFetchingError} = itemsListSlice.actions