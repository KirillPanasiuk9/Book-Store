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

        isDataFetchingAction(state) {
            state.isLoading = true;
            state.isError = false;
        },

        isDataFetchingSuccessAction(state, action) {
            state.items = action.payload
            state.isLoading = false;
            state.isError = false
            console.log(action.payload);
        },

        isDataFetchingErrorAction(state) {
            state.isLoading = false;
            state.isError = true;
        },
    }

})



export default itemsListSlice.reducer
export const {isDataFetchingAction, isDataFetchingSuccessAction, isDataFetchingErrorAction} = itemsListSlice.actions