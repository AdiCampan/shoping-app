import { useState } from 'react';
import Header from './Header/Header';
import './App.css';
import MealList from './Meals/MealList';
import Cart from './Header/Cart';
import { CartProvider } from './Store/CartContext';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const showCarthandler = () => {
    setOpenModal(true);
  }
  const hideCartHanler = () => {
    setOpenModal(false);
  }

  return (
    <CartProvider>
      <div className="App">
        {openModal && <Cart onCloseCart={hideCartHanler} />}
        <Header onShowCart={showCarthandler} />
        <MealList />
      </div>
    </CartProvider>
  );
}

export default App;
