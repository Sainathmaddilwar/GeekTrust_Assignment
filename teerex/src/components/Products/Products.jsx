import React from "react";
import styles from "../Products/Products.module.css";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cheackedProducts = useSelector(
    (state) => state.allProducts.cheackedProducts
  );
  console.log(cheackedProducts);
  return (
    <div className={styles.home}>
      <Filter />
      <Grid container spacing={2}>
        {cheackedProducts.length > 0
          ? cheackedProducts.map((product, idx) => {
              return (
                <Grid item md={3} sm={12} key={idx}>
                  <ProductCard product={product} />
                </Grid>
              );
            })
          : products.map((product, idx) => {
              return (
                <Grid item md={3} sm={12} key={idx}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default Products;
