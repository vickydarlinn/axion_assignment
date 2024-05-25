/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
export const ProductsInfo = createContext();

export const ProductsContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart");
  };
  const addToFavourites = (product) => {
    setFavourites([...favourites, product]);
    console.log("Added to favourites");
  };
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
    console.log("Removed from cart");
  };
  const removeFromFavourites = (product) => {
    setFavourites(favourites.filter((item) => item !== product));
    console.log("Removed from favourites");
  };
  const contextValues = {
    cart,
    favourites,
    addToCart,
    addToFavourites,
    removeFromCart,
    removeFromFavourites,
  };

  return (
    <ProductsInfo.Provider value={contextValues}>
      {children}
    </ProductsInfo.Provider>
  );
};

export const ProductsState = () => {
  return useContext(ProductsInfo);
};
