import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

// const itemsArray = [
//   { id: 1, name: 'Item 1', description: 'Description for Item 1' },
//   { id: 2, name: 'Item 2', description: 'Description for Item 2' },
//   { id: 3, name: 'Item 3', description: 'Description for Item 3' },
//   { id: 3, name: 'Item 3', description: 'Description for Item 3' },
//   { id: 3, name: 'Item 3', description: 'Description for Item 3' }

// ];

function ApproveBenificiary() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/v1/proposedbeneficiary');
      const data = await response.json();
      console.log("proposed benefi", response)
      setItems(data);
    }
    fetchData();
  }, [])

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="flex justify-center w-full flex-col items-center">
      <h1>Benificiary Approval List</h1>
      <br></br>
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default ApproveBenificiary;
