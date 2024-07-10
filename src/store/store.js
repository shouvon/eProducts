import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductSlice from "../reducers/ProductSlice";
import CartSlice from "../reducers/CartSlice";
import Storage from "./Storage";


export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        products: ProductSlice,
        cart: CartSlice
    },
    preloadedState: Storage.LoadState()
})

store.subscribe(() => {
    Storage.SaveState(store.getState());
});

export default store