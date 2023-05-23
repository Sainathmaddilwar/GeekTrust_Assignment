import React, { useState } from "react";
import styles from "../CartItem/CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCartQuantity,
  setCartDelete,
  setAmount,
} from "../../redux/Slices/CartSlice";
import { Button } from "antd";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartProducts.cart);
  const cartAmount = useSelector((state) => state.cartProducts.totalAmount);
  const [value, setValue] = useState(item.selQuantity);
  let selPrice = 0;
  // console.log(cart);
  const increment = () => {
    setValue(value + 1);
    // console.log(item);
    if (value + 1 > item.quantity) {
      alert("item are out of stock");
      setValue(value);
      return;
    }

    const tempData = cart.map((product) => {
      if (product.id === item.id) {
        selPrice = product.price;
        return {
          ...product,
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          selQuantity: value + 1,
          quantity: product.quantity,
        };
      }
      return product;
    });
    console.log(tempData);
    dispatch(setCartQuantity({ data: tempData, price: selPrice, type: "Inc" }));
  };
  const decrement = () => {
    setValue(value - 1);
    if (value - 1 <= 0) {
      alert("select valid quantity");
      setValue(value);
      return;
    }
    const tempData = cart.map((product) => {
      if (product.id === item.id) {
        selPrice = product.price;
        return {
          ...product,
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          selQuantity: value - 1,
          quantity: product.quantity,
        };
      }
      return product;
    });
    console.log(tempData);
    dispatch(setCartQuantity({ data: tempData, price: selPrice, type: "Dec" }));
  };
  const handleDelete = () => {
    // console.log(cart);
    console.log(cart);
    const filteredData = cart.filter((data) => item.id !== data.id);
    // console.log(filteredData);
    let amount = 0;
    cart.map((data) => {
      if (item.id === data.id) {
        amount = data.price * data.selQuantity;
      }
    });
    console.log(amount);
    dispatch(setAmount(cartAmount - amount));
    dispatch(setCartDelete(filteredData));
  };
  return (
    <div className={styles.cartItem}>
      <div>
        <img className={styles.image} src={item.imageUrl} alt="cart_img" />
      </div>
      <div>{item.name}</div>
      <div>
        <button onClick={() => decrement()}>-</button>
        {value}
        <button onClick={() => increment()}>+</button>
      </div>
      <div>Rs {item.price * item.selQuantity}</div>
      <div>
        <Button onClick={() => handleDelete()} type="primary" danger>
          delete
        </Button>
      </div>
      ''
    </div>
  );
};

export default CartItem;
