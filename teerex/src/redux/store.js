import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice";
import CartReducer from "./Slices/CartSlice";
export default configureStore({
  reducer: {
    allProducts: ProductReducer,
    cartProducts: CartReducer,
  },
});
