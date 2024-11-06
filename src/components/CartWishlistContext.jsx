import { createContext, useContext, useState, useEffect } from "react";

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const savedWishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setCartItems(savedCartItems);
    setWishlistItems(savedWishlistItems);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.product_id === product.product_id);
      if (!isProductInCart) {
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCartItems([]); 
    localStorage.setItem("cartItems", JSON.stringify([])); 
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some((item) => item.product_id === product.product_id);
      if (!isProductInWishlist) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.product_id !== productId);
      localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <CartWishlistContext.Provider value={{ cartItems, wishlistItems, addToCart, addToWishlist, removeFromWishlist, clearCart }}>
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
