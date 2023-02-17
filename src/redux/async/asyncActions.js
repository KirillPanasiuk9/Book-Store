import {isDataFetching ,isDataFetchingSuccess, isDataFetchingError} from "../slices/itemsListSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


export function fetchItemsList() {
    // console.log(1)
    // const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDTQWN8aj5rJ0LgM3h-5nRh7y11EEA-L3I&maxResults=5')
    // const result = await data.json()
    // console.log(result.items);
    return async (dispatch) => {
        dispatch(isDataFetching())
        try {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDTQWN8aj5rJ0LgM3h-5nRh7y11EEA-L3I&maxResults=5')
            const data = await response.json()
            dispatch(isDataFetchingSuccess(data.items))
            console.log(data.items)
        } catch (e) {
            console.log(e)
            dispatch(isDataFetchingError())
        }
    }
}