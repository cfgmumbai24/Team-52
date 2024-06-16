import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

function ItemList({ items, onRemoveItem }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
}

export default ItemList;
