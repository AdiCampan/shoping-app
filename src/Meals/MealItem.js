import React from 'react'
import { useContext, useState } from 'react';
import CartContext from '../Store/CartContext';
import './MealItem.css';

const MealItem = ({ food }) => {
  const [amount, setAmount] = useState(1);
  const { addToCart, cart } = useContext(CartContext);

 

  const addItem = () => {
    addToCart(food, amount)
    setAmount(1)
  }
  return (
    <>
      <div className='meal-item'>
        <div className='meal-title'>
          {food.title}
        </div>
        <img className='image-item' src={food.image} alt='delicious food' />

        <div className='input-container'>
          <div className='price'>
            <div>{food.price}€</div>
          </div>
          <input
            id={food.id}
            type="number"
            min='1'
            max='5'
            step='1'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div >
            <button className='button' onClick={addItem}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealItem;