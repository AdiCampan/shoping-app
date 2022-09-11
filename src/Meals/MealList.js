import React from 'react'
import MealItem from './MealItem';
import './MealList.css';
import hamburger from '../assets/hamburger.png';
import sandwich from '../assets/sandvich.png';
import frenchFries from '../assets/french-fries.png';
import cake from '../assets/cake.png';
import pizza from '../assets/pizza.png';
import idli from '../assets/idli.png';

const FOOD_LIST = [
  {
    id: "f1",
    title: "Hamburger",
    image: hamburger ,
    price: 9.99,
  },
  {
    id: "f2",
    title: "Sandwich",
    image: sandwich ,
    price: 6.50,
  },
  {
    id: "f3",
    title: "Fench Fries",
    image: frenchFries ,
    price: 8.00,
  },
  {
    id: "f4",
    title: "Pizza",
    image:  pizza ,
    price: 15.50,
  },
  {
    id: "f5",
    title: "Idli",
    image: idli,
    price: 9.00,
  },
  {
    id: "f6",
    title: "Cake",
    image: cake,
    price: 6.50,
  }
]

const MealList = () => {
  const list = FOOD_LIST.map((food) => <li>
    <MealItem
    id={food.id}
    key={food.id}
    title={food.title}
    image={food.image}
    price={food.price}
    />
  </li>)

  return (
    <>
      <div className='meal-list'>
        {list}
      </div>
    </>
  )
}

export default MealList;