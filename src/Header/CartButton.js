import React from 'react'
import { useContext, useState, useEffect } from 'react';
import CartContext from '../Store/CartContext';
import './CartButton.css'
import CartIcon from './CartIcon';

const CartButton = ({ onClick }) => {
  const { cart } = useContext(CartContext);
  const [btnBump, setBtnBump] = useState(false);

  const totalPrice = cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0);
  const fixedPrice = totalPrice.toFixed(2)
  const numberOfCartItems = cart.length;


  const btnClasses =`${"cart-button"} ${btnBump ? "bump" : ''}`;
  useEffect(() => {
    if (cart.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  return (
    <>
      <button className={btnClasses} onClick={onClick}>
        <span className='cart-icon'>
          <CartIcon />
        </span>
        <span className='cart-totalPrice'>{fixedPrice} $</span>
        {/* <span className='cart-text'>Your Cart</span> */}
        <span className='cart-badge'>
          <div>Foods</div>
          <div>{numberOfCartItems}</div>
        </span>
      </button>
    </>
  )
}

export default CartButton;