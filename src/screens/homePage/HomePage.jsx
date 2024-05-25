import ProductCard from "../../components/productCard";
import style from "./homePage.module.css";
const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <ProductCard />
    </div>
  );
};

export default HomePage;
