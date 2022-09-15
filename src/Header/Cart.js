import React from 'react'
import Modal from '../Modal'

const Cart = ({ onCloseCart }) => {
  const cartItems = <ul>{
    [{
      id: 'f1',
      name: 'Hamburger',
      amount: 2,
      price: 10.50
    }].map((item) => <li>{item.name}
    </li>)
  }</ul>

  return (
    <Modal onClose={onCloseCart}>
      <div>{cartItems}</div>
      <div>
        <span>Total Amount</span>
        <span>20</span>
      </div>
      <div>
        <button onClick={onCloseCart}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  )
}

export default Cart