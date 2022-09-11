import React from 'react'
import './CartButton.css'
import CartIcon from './CartIcon';

const CartButton = () => {
  return (
    <>
      <button className='cart-button'>
        <span className='cart-icon'>
          <CartIcon />
        </span>
        <span className='cart-text'>Your Cart</span>
        <span className='cart-badge'>2</span>
      </button>
    </>
  )
}

export default CartButton;