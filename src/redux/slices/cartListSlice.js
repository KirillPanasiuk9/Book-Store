import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}

const cartListSlice = createSlice({
    name: "cartListSlice",
    initialState,
    reducers: {

        addToCartAction(state, action) {
            state.cartItems.push({
                ...action.payload,
                cover: action.payload.cover,
                count: 1,
                price: action.payload.price,
                totalPrice: action.payload.price
            })
        },

        removeFromCartAction(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },

        incrementQuantityAction(state, action) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[index].count += 1;
            state.cartItems[index].totalPrice += action.payload.price;
        },

        decrementQuantityAction(state, action) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[index].count -= 1;
            state.cartItems[index].totalPrice -= action.payload.price;
        }
    }
})

export default cartListSlice.reducer
export const {addToCartAction, removeFromCartAction, incrementQuantityAction, decrementQuantityAction} = cartListSlice.actions