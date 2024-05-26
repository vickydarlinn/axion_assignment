import React from "react";
import style from "./singleProductPage.module.css";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { SiTicktick } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import Carousels from "../../components/carousels";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = data.find((obj) => obj.id == id);
  const {
    product_description,
    product_discounted_price,
    product_mrp_price,
    product_images,
    title,
  } = product;

  return (
    <div className={style.wrapper}>
      <Carousels data={product_images} />
      <div className={style.details}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.description}>
          <span className={style.mrp_price}>₹{product_mrp_price}</span>
          <span className={style.discounted_price}>
            {product_discounted_price}
          </span>
          <span className={style.offer}>
            -a
            {(product_discounted_price - product_mrp_price / 100).toFixed(2)}
          </span>
        </div>
        <div className={style.stock}>
          <SiTicktick />
          <span>IN STOCK</span>
        </div>
        <div className={style.cart_wishlist}>
          <div className={style.cart}>
            <section className={style.cartCount}>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </section>
            <span className={style.add_to_cart}>ADD TO CART</span>
          </div>
          <div className={style.wishlist}>
            <FaRegHeart />
            <span>ADD TO WISHLIST</span>
          </div>
        </div>
        <div className={style.whatsapp}>
          <FaWhatsapp />
          <span>INQUIRE ON WHATSAPP</span>
        </div>
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
