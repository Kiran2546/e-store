import React from 'react';
import '../menu-item/menu-list-style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='bg-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
