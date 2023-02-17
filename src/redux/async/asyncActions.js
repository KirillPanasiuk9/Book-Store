import {isDataFetching ,isDataFetchingSuccess, isDataFetchingError} from "../slices/itemsListSlice";


export function fetchItemsList(search) {
    return async (dispatch) => {
        dispatch(isDataFetching())
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDTQWN8aj5rJ0LgM3h-5nRh7y11EEA-L3I&maxResults=40`)
            const data = await response.json()
            dispatch(isDataFetchingSuccess(data.items))
            console.log(data.items)
        } catch (e) {
            console.log(e)
            dispatch(isDataFetchingError())
        }
    }
}