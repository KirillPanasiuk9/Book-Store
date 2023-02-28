import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}

const cartListSlice = createSlice({
    name: "cartListSlice",
    initialState,
    reducers: {

        addToCartAction(state, action) {
            state.cartItems.push(action.payload)
            console.log(action.payload);
        },

        removeFromCartAction(state, action) {
            state.cartItems.filter(item => item.id !== action.payload.id)
        }
    }
})

export default cartListSlice.reducer
export const {addToCartAction, removeFromCartAction} = cartListSlice.actions