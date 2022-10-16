import React from 'react'
import { useContext } from 'react';
import CartContext from '../Store/CartContext';
import './CartButton.css'
import CartIcon from './CartIcon';

const CartButton = ({ onClick }) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0);
  const fixedPrice = totalPrice.toFixed(2)
  const numberOfCartItems = cart.length;

  return (
    <>
      <button className='cart-button' onClick={onClick}>
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