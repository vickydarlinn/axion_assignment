import style from "./productCard.module.css";
import { FaRegHeart } from "react-icons/fa6";
import { ProductsState } from "../../Context";

const ProductCard = () => {
  const { addToCart, addToFavourites } = ProductsState();
  const handleAddToCart = (e) => {
    // addToCart(e.target);
  };
  const handleAddToFavourites = (e) => {
    // addToFavourites(e.target);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.image_card}>
        <img src="https://toqri.com/wp-content/uploads/2023/12/amaze-1024x1024.png" />
      </div>
      <div>
        <h3 className={style.title}>Title will go here</h3>
        <div className={style.flicker}>
          <div className={style.description}>
            <span className={style.mrp_price}>22000</span>
            <span className={style.discounted_price}>15000</span>
            <span className={style.offer}>-13% Off</span>
          </div>
          <div className={style.actions}>
            <span onClick={(e) => handleAddToCart(e)}>ADD TO CART</span>
            <span>QUICKVIEW</span>
            <span onClick={(e) => handleAddToFavourites(e)}>
              <FaRegHeart size={18} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
