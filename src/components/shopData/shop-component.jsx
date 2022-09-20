import React from 'react';
import SHOP_DATA from './shop-Data.js';
import ShopPage from './shop-component/shop-list';
console.log(SHOP_DATA);

class CollectionItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    console.log('collection', collection);
    return (
      <div className='Shop-Component'>
        {collection.map(({ id, ...otherCollectionProps }) => {
          return <ShopPage key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default CollectionItems;
