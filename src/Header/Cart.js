import React, { useState, useContext } from 'react'
import CartContext from '../Store/CartContext';
import Modal from '../Modal';
import './Cart.css';
import { FaTrash } from "react-icons/fa";

const Cart = ({ onCloseCart }) => {
  const { cart, clearCart, removeProduct } = useContext(CartContext);

  const cartItems = cart.map((item) =>
    <li className='cart-items' key={item.id} >
      {item.quantity} X {item.title} {"$"}{item.price * item.quantity}
     <FaTrash className='delete-button' onClick={() => removeProduct(item.id)} />
      <hr />
    </li>);

  const totalPrice = cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0);
  const fixedPrice = totalPrice.toFixed(2)

  return (
    <Modal onClose={onCloseCart}>
      <div >{cartItems} </div>
      <div className='totalandbuttons'>
        <div className='total-price'>
          <span>Total: </span>
          <span>$ {fixedPrice}</span>
        </div>
        <div>
          <button className='cartModal-button' onClick={clearCart}>Clear All</button>
          <button className='cartModal-button' onClick={onCloseCart}>Close</button>
          <button className='cartModal-button'>Order</button>

        </div>
      </div>
    </Modal>
  )
}

export default Cart;