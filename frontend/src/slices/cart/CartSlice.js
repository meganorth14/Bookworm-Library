import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../app/localStorage'

const persistedState = loadState();

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            count: 0,
            items: [],
            ...persistedState.cart
        },
    },
    reducers: {
        addToCart: (state, action) => {
            //add item to cart
            state.value = {
                count: state.value.count + 1,
                items: state.value.items.push(action.payload)
            }
        },
        removeFromCart: (state,action) => {
            //remove item from cart
            let index = state.value.cart.items.findIndex((book)=>book.book_id === action.payload.book_id);
            if(index > -1){
                state.value = {
                    count: state.value.count - 1,
                    items: state.value.items.splice(index, 1)
                }
            }     
        },
        emptyCart: (state) => {
            //remove user info
            state.value = {
                count: 0,
                items: []
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer