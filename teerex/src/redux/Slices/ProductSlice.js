import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    cheackedProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCheackedProducts: (state, action) => {
      state.cheackedProducts = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { setProducts, setCheackedProducts } = ProductSlice.actions;
