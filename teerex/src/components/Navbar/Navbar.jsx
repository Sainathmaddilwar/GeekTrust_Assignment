import React from "react";
import styles from "../Navbar/Navbar.module.css";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div>Teerex Store</div>
      <div className={styles.cart}>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Products
        </div>
        <div>
          <ShoppingCartOutlined
            onClick={() => navigate("/cart")}
            style={{
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
