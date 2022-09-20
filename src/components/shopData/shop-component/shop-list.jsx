import React from 'react';
import './shop-style.scss';
import COLLECTIONITEM from '../collection-item/collection-item';

const ShopPage = ({ id, title, routeName, items }) => {
  console.log({ id }, { title }, { routeName }, { items });
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((ele, ind) => ind < 4)
          .map((element, index) => (
            <COLLECTIONITEM key={index} {...element}></COLLECTIONITEM>
          ))}
      </div>
    </div>
  );
};
export default ShopPage;
