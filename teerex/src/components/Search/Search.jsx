import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/Slices/ProductSlice";
import styles from "../Search/Search.module.css";
const Search = ({ fetchData }) => {
  const [search, setSearch] = useState("");
  const cheackedProducts = useSelector(
    (state) => state.allProducts.cheackedProducts
  );
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const changeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      fetchData();
    }
  };
  const handleSearch = () => {
    let tempProducts = [];
    cheackedProducts.length > 0
      ? (tempProducts = cheackedProducts.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        }))
      : (tempProducts = products.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        }));
    dispatch(setProducts(tempProducts));
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        onChange={changeSearch}
        value={search}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default Search;
