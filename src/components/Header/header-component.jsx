import React from 'react';
import './headerStyle.scss';
import { ReactComponent as Logo } from '../../asserts/logocrown1.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>Fashion Mart
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
