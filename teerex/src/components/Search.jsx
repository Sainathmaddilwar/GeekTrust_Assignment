import React from "react";
import { useState } from "react";
const Search = ({ products, setProducts, fetchData }) => {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      fetchData();
    }
  };
  const handleSearch = () => {
    let tempProducts = products.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(tempProducts);
    setProducts(tempProducts);
  };
  return (
    <div className="search-bar">
      <input onChange={changeSearch} value={search} />
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default Search;
