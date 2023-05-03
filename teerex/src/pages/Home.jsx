import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Products from "../components/Products";
import Search from "../components/Search";
import Navbar from "../components/Navbar/Navbar";
const URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    setProducts(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 20px",
        }}
      >
        <Search
          products={products}
          setProducts={setProducts}
          fetchData={fetchData}
        />
      </div>
      <Products products={products} />
    </div>
  );
};

export default Home;
