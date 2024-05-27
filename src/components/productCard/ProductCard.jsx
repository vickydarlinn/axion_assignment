import style from "./productCard.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { ProductsState } from "../../Context";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const toast = useToast();
  const {
    id,
    product_discounted_price,
    product_images,
    product_mrp_price,
    title,
  } = productData;
  const {
    addToCart,
    addToFavourites,
    cart,
    favourites,
    removeAllFromCart,
    removeFromFavourites,
  } = ProductsState();

  const isInCart = cart.some((item) => item.id === id);
  const isInFavourites = favourites.includes(id);

  const handleAddToCart = (id) => {
    addToCart(id);
    toast({
      title: "Product added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleAddToFavourites = (id) => {
    addToFavourites(id);
    toast({
      title: "Product added to favourites",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveFromCart = (id) => {
    removeAllFromCart(id);
    toast({
      title: "Product removed from cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveFromFavourites = (id) => {
    removeFromFavourites(id);
    toast({
      title: "Product removed from favourites",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div className={style.wrapper}>
      <Link to={`/products/${id}`} className={style.image_card}>
        <img src={product_images[0]} />
      </Link>
      <div>
        <h3 className={style.title}>{title}</h3>
        <div className={style.flicker}>
          <div className={style.description}>
            <span className={style.mrp_price}>${product_mrp_price}</span>
            <span className={style.discounted_price}>
              ${product_discounted_price}
            </span>
            <span className={style.offer}>
              -
              {(
                ((product_mrp_price - product_discounted_price) /
                  product_mrp_price) *
                100
              ).toFixed(2)}
              %
            </span>
          </div>
          <div className={style.actions}>
            {isInCart ? (
              <span onClick={() => handleRemoveFromCart(id)}>
                ADDED TO CART
              </span>
            ) : (
              <span onClick={() => handleAddToCart(id)}>ADD TO CART</span>
            )}
            <span>QUICKVIEW</span>
            {isInFavourites ? (
              <span onClick={() => handleRemoveFromFavourites(id)}>
                <FaHeart />
              </span>
            ) : (
              <span onClick={() => handleAddToFavourites(id)}>
                <FaRegHeart />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
