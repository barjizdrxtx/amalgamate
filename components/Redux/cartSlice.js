import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuanity += 1;
            }
            else {
                const tempProduct = { ...action.payload, cartQuanity: 1 };
                state.cartItems.push(tempProduct);

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem._id !== action.payload._id
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(nextCartItems));
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            )
            if (state.cartItems[itemIndex].cartQuanity > 1) {

                state.cartItems[itemIndex].cartQuanity -= 1;
            }
            else if (state.cartItems[itemIndex].cartQuanity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem._id !== action.payload._id
                )
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(nextCartItems));
            }
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { offer, cartQuanity } = cartItem;
                    const itemTotal = offer * cartQuanity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuanity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

    }
})

export const { addToCart, removeFromCart, decreaseCart, getTotals } = cartSlice.actions

export default cartSlice.reducer
