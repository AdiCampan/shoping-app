import React from 'react';

import CartButton from './CartButton';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header-bar'>
        <div>
          <h3 className='title-page'>ON-LINE FAST FOOD</h3>
          <div>We bring you your favorite food</div>
        </div>

        <CartButton />

      </div>
    </>
  )
}

export default Header;