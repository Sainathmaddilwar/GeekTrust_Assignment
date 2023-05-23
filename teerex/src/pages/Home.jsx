import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Products from "../components/Products/Products";
import Search from "../components/Search/Search";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/Slices/ProductSlice";

const URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    dispatch(setProducts(data));
    // dispatch(setCheackedProducts(data));

    // setProducts(data);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 20px",
        }}
      >
        <Search fetchData={fetchData} />
      </div>
      <Products />
    </div>
  );
};

export default Home;
