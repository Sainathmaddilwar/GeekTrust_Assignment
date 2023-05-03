import * as React from "react";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={product.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {product.name}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.primary">
            Rs {product.price}
          </Typography>
          <Typography>
            <button>add to cart</button>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
