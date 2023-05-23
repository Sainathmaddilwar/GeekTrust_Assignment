import React, { useEffect } from "react";
import { setAmount, setOrderPlaced } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
const Thanks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAmount(0));
    dispatch(setOrderPlaced([]));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Thank you for shopping your order is Placed Succesfully</h1>
    </div>
  );
};

export default Thanks;
