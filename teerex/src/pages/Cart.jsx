import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cartProducts.cart);
  const totalAmount = useSelector((state) => state.cartProducts.totalAmount);
  const Navigate = useNavigate();
  // console.log(cart);
  //   let totalAmounut = 0;
  //   cart.map((obj) => (totalAmounut = (totalAmounut + obj.price) * obj.quantity));
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((product) => {
          return <CartItem key={product.id} item={product} />;
        })
      ) : (
        <h1>Cart is empty</h1>
      )}

      {totalAmount > 0 && (
        <div>
          <div style={{ backgroundColor: "black", height: "2px" }}></div>
          <h1>Rs {totalAmount}</h1>
        </div>
      )}
      {cart.length > 0 && (
        <button
          style={{ marginLeft: "70px", marginTop: "20px" }}
          onClick={() => Navigate("/thanks")}
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;
