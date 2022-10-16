import { createContext, useState } from "react";
import React from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart)
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: Number(product.quantity) + Number(quantity) } : product;
      }));
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  };

  const clearCart = () => setCart([]);
  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
      cart,
      clearCart,
      isInCart,
      removeProduct,
      addToCart
    }} >
      {children}
    </CartContext.Provider>
  )
};
export { CartProvider };
export default CartContext;