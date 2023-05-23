import * as React from "react";

import Card from "@mui/material/Card";
import styles from "../ProductCard/ProductCard.module.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/Slices/CartSlice";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handelCart = () => {
    console.log(product);

    const tempProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageURL,
      selQuantity: 1,
      quantity: product.quantity,
    };
    dispatch(setCart(tempProduct));
    alert("added to cart");
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={product.imageURL}
          alt="Paella dish"
        />
        <CardContent className={styles.card}>
          <Typography variant="body1" color="text.primary">
            {product.name}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.primary">
              Rs {product.price}
            </Typography>
            <Typography>
              <button onClick={handelCart} className={styles.cardButton}>
                add to cart
              </button>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
