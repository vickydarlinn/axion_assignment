import style from "./singleProductPage.module.css";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { SiTicktick } from "react-icons/si";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import Carousels from "../../components/carousels";
import { ProductsState } from "../../Context";
import { useToast } from "@chakra-ui/react";

const SingleProductPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const {
    addToCart,
    addToFavourites,
    cart,
    favourites,
    removeFromCart,
    removeFromFavourites,
  } = ProductsState();

  const product = data.find((obj) => obj.id === Number(id));
  const { product_discounted_price, product_mrp_price, product_images, title } =
    product;

  const isFavourite = favourites.includes(Number(id));
  const cartItem = cart.find((item) => item.id === Number(id));
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToFavourites = () => {
    addToFavourites(Number(id));
    toast({
      title: "Product added to favourites",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveFromFavourites = () => {
    removeFromFavourites(Number(id));
    toast({
      title: "Product removed from favourites",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleAddToCart = () => {
    addToCart(Number(id));
    toast({
      title: "Product added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(Number(id));
    toast({
      title: "Product removed from cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const getWhatsAppLink = () => {
    const message = `Hey, I am interested in buying ${title} for ${product_discounted_price}.`;
    const phoneNumber = "+918787878787";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={style.wrapper}>
      <Carousels data={product_images} />
      <div className={style.details}>
        <h2 className={style.title}>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          voluptas placeat praesentium esse iure voluptates nostrum eligendi
          exercitationem asperiores quo dicta quam eveniet dolores numquam sit
          autem amet, corrupti deserunt maiores sed saepe iusto eos rerum illo.
          Minima perspiciatis quidem iste magni perferendis. Totam, ipsum
          eveniet eaque at facere repellendus fugiat nihil autem iusto incidunt
          distinctio nam nesciunt voluptatum aliquid quidem voluptatibus
          delectus similique recusandae. Labore repellat dicta optio! Iusto ea
          neque, earum nulla aliquam nisi repudiandae similique dolore vel sed
          deleniti enim iste accusantium, rerum magni consequuntur inventore!
          Perspiciatis, et similique quos ullam quasi odio rerum dolor
          reiciendis possimus.
        </p>
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
        <div className={style.stock}>
          <SiTicktick />
          <span>IN STOCK</span>
        </div>
        <div className={style.cart_wishlist}>
          <div className={style.cart}>
            <section className={style.cartCount}>
              <span onClick={handleRemoveFromCart}>-</span>
              <span>{quantity}</span>
              <span onClick={handleAddToCart}>+</span>
            </section>
            <span className={style.add_to_cart} onClick={handleAddToCart}>
              ADD TO CART
            </span>
          </div>
          {isFavourite ? (
            <div
              className={style.wishlist}
              onClick={handleRemoveFromFavourites}
            >
              <FaHeart />
              <span>ADDED TO WISHLIST</span>
            </div>
          ) : (
            <div className={style.wishlist} onClick={handleAddToFavourites}>
              <FaRegHeart />
              <span>ADD TO WISHLIST</span>
            </div>
          )}
        </div>
        <a
          href={getWhatsAppLink()}
          className={style.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span>INQUIRE ON WHATSAPP</span>
        </a>
        <div className={style.share}>
          <span>SHARE</span>
          <FaXTwitter size={20} />
          <FaFacebookF size={20} />
          <FaLinkedin size={20} />
          <FaPinterestP size={20} />
          <CiMail size={20} />
          <IoMdLink size={20} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
