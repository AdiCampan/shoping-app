import Header from './Header/Header';
import './App.css';
import MealList from './Meals/MealList';
import foodTable from './assets/green-food.jpg';
import Cart from './Header/Cart';

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      {/* <img className='image' src={foodTable} alt='a table with food !' /> */}
      <MealList />
    </div>
  );
}

export default App;
