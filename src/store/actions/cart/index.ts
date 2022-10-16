import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state:any, action:any) {
            state.cartItems.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer