import React from 'react';
import './../collection-item/collectionItemStyle.scss';

const COLLECTIONITEM = ({ id, name, imageUrl, price }) => {
  return (
    <div key={id} className='collection-item'>
      <div
        className='bg-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='Collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default COLLECTIONITEM;
