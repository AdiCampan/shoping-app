import React from 'react'
import './MealItem.css';

const MealItem = ({ id, image, title, price }) => {

  return (
    <>
      <div className='meal-item'>
        <div>
          {title}
        </div>
        <img className='image-item' src={image} alt='delicious food' />

        <div className='input-container'>
          <div className='price'>
            <div>{price}€</div>
          </div>
          <input
            id={id}
            type="number"
            min='1'
            max='5'
            step='1'
            defaultValue='1'
          />
          <div >
            <button className='button'>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealItem;