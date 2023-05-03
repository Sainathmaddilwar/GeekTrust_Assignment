import React from "react";
import "../components/products.css";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
const Products = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, idx) => {
        return (
          <Grid item md={3} sm={12} key={idx}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
