import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import cart from "./cart";
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})