import { useState } from 'react';
import Header from './Header/Header';
import './App.css';
import MealList from './Meals/MealList';
import foodTable from './assets/green-food.jpg';
import Cart from './Header/Cart';

function App() {

  const[openModal,setOpenModal] = useState(false);

  const showCarthandler = () =>{
    setOpenModal(true);
  }
  const hideCartHanler = () => {
    setOpenModal(false);
  }

  return (
    <div className="App">
      {openModal && <Cart  onCloseCart={hideCartHanler}/>}
      <Header  onShowCart={showCarthandler}/>
      {/* <img className='image' src={foodTable} alt='a table with food !' /> */}
      <MealList />
    </div>
  );
}

export default App;
