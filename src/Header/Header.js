import React from 'react';

import CartButton from './CartButton';
import './Header.css';

const Header = ({ onShowCart }) => {
  return (
    <>
      <div className='header-bar'>
        <div>
          <h3 className='title-page'>ON-LINE FAST FOOD</h3>
          <div>We bring you your favorite food</div>
        </div>

        <CartButton onClick={onShowCart}/>

      </div>
    </>
  )
}

export default Header;