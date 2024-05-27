import { createContext, useContext, useState } from "react";

export const ProductsInfo = createContext();

export const ProductsContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const removeAllFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const addToFavourites = (productId) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(productId)) {
        return [...prevFavourites, productId];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (productId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item !== productId)
    );
  };

  const contextValues = {
    cart,
    favourites,
    addToCart,
    addToFavourites,
    removeFromCart,
    removeFromFavourites,
    removeAllFromCart,
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
