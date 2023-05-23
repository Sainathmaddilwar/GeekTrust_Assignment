import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    cart: [],
    totalAmount: 0,
  },
  reducers: {
    setCart: (state, action) => {
      const { name, id, price, quantity } = action.payload;
      state.totalAmount = state.totalAmount + price;
      let bool = false;
      if (state.cart.length === 0) {
        state.cart = [...state.cart, action.payload];
      } else {
        const tempCart = state.cart.map((obj) => {
          if (obj.name === name) {
            bool = true;
            return {
              ...obj,
              name: name,
              id: id,
              price: price,
              quantity: obj.quantity + quantity,
            };
          }
          return obj;
        });
        if (bool) {
          state.cart = tempCart;
        } else {
          state.cart = [...state.cart, action.payload];
        }
      }

      //   state.cart = [...state.cart, action.payload];
    },
    setAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    setOrderPlaced: (state, action) => {
      state.cart = action.payload;
    },
    setCartQuantity: (state, action) => {
      // const { price } = action.payload;
      // console.log(action.payload.price);
      if (action.payload.type === "Inc") {
        state.totalAmount = state.totalAmount + action.payload.price;
        state.cart = action.payload.data;
      } else {
        state.totalAmount = state.totalAmount - action.payload.price;
        state.cart = action.payload.data;
      }
    },
    setCartDelete: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default CartSlice.reducer;
export const {
  setCart,
  setAmount,
  setOrderPlaced,
  setCartQuantity,
  setCartDelete,
} = CartSlice.actions;
