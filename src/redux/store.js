import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // add other reducers here
    },
});

export default store;