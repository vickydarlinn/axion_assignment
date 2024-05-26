import ProductCard from "../../components/productCard";
import style from "./homePage.module.css";
import data from "../../data.json";

const HomePage = () => {
  console.log(data);
  return (
    <div className={style.wrapper}>
      {data.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default HomePage;
