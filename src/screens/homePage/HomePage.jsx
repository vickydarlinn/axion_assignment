import React, { useState } from "react";
import ProductCard from "../../components/productCard";
import style from "./homePage.module.css";
import data from "../../data.json";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((product) => product.type === activeFilter);

  return (
    <>
      <div className={style.filter}>
        <span
          className={activeFilter === "All" ? style.active : ""}
          onClick={() => handleFilterChange("All")}
        >
          All
        </span>
        <span
          className={activeFilter === "Chair" ? style.active : ""}
          onClick={() => handleFilterChange("Chair")}
        >
          Chairs
        </span>
        <span
          className={activeFilter === "Table" ? style.active : ""}
          onClick={() => handleFilterChange("Table")}
        >
          Tables
        </span>
        <span
          className={activeFilter === "Storage" ? style.active : ""}
          onClick={() => handleFilterChange("Storage")}
        >
          Storage
        </span>
      </div>
      <div className={style.wrapper}>
        {filteredData.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
