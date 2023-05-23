import React from "react";
import styles from "../Filter/Filter.module.css";
import { Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setCheackedProducts } from "../../redux/Slices/ProductSlice";
const Filter = () => {
  const products = useSelector((state) => state.allProducts.products);

  const cheackedProducts = useSelector(
    (state) => state.allProducts.cheackedProducts
  );
  const dispatch = useDispatch();
  const onColorChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    // console.log(products);
    let tempData = [];
    console.log(cheackedProducts);
    for (let i = 0; i < checkedValues.length; i++) {
      cheackedProducts.length > 0
        ? (tempData = cheackedProducts.filter(
            (product) => product.color === checkedValues[i]
          ))
        : (tempData = products.filter(
            (product) => product.color === checkedValues[i]
          ));
      // eslint-disable-next-line
    }
    // console.log(tempData);
    if (tempData.length === 0 && checkedValues.length === 0) {
      dispatch(setCheackedProducts([]));
    } else {
      dispatch(setCheackedProducts(tempData));
    }
  };
  const onGenderChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    // console.log(products);
    console.log(cheackedProducts);
    let tempData = [];
    for (let i = 0; i < checkedValues.length; i++) {
      cheackedProducts.length > 0
        ? (tempData = cheackedProducts.filter(
            (product) => product.gender === checkedValues[i]
          ))
        : (tempData = products.filter(
            (product) => product.gender === checkedValues[i]
          ));
    }

    if (tempData.length === 0 && checkedValues.length === 0) {
      dispatch(setCheackedProducts([]));
    } else {
      dispatch(setCheackedProducts(tempData));
    }
    // console.log(tempData);
  };
  const onTypeChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    // console.log(value);
    // console.log(products);

    console.log(checkedValues.value);
    let tempData = [];
    for (let i = 0; i < checkedValues.length; i++) {
      cheackedProducts.length > 0
        ? (tempData = cheackedProducts.filter(
            (product) => product.type === checkedValues[i]
          ))
        : (tempData = products.filter(
            (product) => product.type === checkedValues[i]
          ));
    }

    if (tempData.length === 0 && checkedValues.length === 0) {
      dispatch(setCheackedProducts([]));
    } else {
      dispatch(setCheackedProducts(tempData));
    }
    // console.log(tempData);
  };
  const colorOptions = ["Red", "Blue", "Green"];
  const genderOptions = ["Women", "Men"];
  const typeOptions = ["Basic", "Hoodie", "Polo"];
  return (
    <div className={styles.filters}>
      <div>
        Colors
        <br />
        <Checkbox.Group
          options={colorOptions}
          //   defaultValue={["Apple"]}
          onChange={onColorChange}
        />
      </div>
      <br />
      <div>
        Gender
        <br />
        <Checkbox.Group
          options={genderOptions}
          //   defaultValue={["Apple"]}

          onChange={onGenderChange}
        />
      </div>
      <br />
      <div>
        Type
        <br />
        <Checkbox.Group
          options={typeOptions}
          //defaultValue={["Apple"]}

          onChange={onTypeChange}
        />
      </div>
      <br />
    </div>
  );
};

export default Filter;
