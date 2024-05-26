/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
export const ProductsInfo = createContext();

export const ProductsContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (productId) => {
    setCart((prev) => [...prev, productId]);
  };

  const addToFavourites = (productId) => {
    setFavourites((prev) => [...prev, productId]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item !== productId));
  };

  const removeFromFavourites = (productId) => {
    setFavourites(favourites.filter((item) => item !== productId));
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
