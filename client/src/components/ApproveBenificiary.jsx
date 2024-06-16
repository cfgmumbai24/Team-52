import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';



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

  if (items.length === 0) return (<h1
    className='h-screen flex justify-center items-center w-full'
  >No items to display</h1>);

  return (
    <div className="flex justify-center w-full flex-col items-center">
      <h1>Benificiary Approval List</h1>
      <br></br>
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default ApproveBenificiary;
