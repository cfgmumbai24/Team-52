import React, { useState } from 'react';
import '../styles/Item.css';

function Item({ item, onRemoveItem }) {
  const [status, setStatus] = useState(null);


  return (
    <div className='flex flex-col rounded-md shadow-md px-4 py-4 gap-2'>
      <div className='font-semibold text-xl' >{item.name}</div>
      <div className='flex gap-3'>
        <div>
          Taluka: {item.taluka}

        </div>
        <div>
          Hamlet: {item.hamlet}
        </div>
        <div>
          City: {item.city}
        </div>
      </div>
      <div>
        Phone No. {item.phone}
      </div>
      <div className='flex gap-2 mt-2 text-white font'>
        <button style={{ backgroundColor: "lightgreen" }} className='px-4 py-1 rounded-md flex items-center justify-center' onClick={() => setStatus('approved')}>Approve</button>
        {/* <button style={{backgroundColor: "#ce5a5a"}} onClick={() => handleDecline(item.id)}>Decline</button> */}
        <button style={{ backgroundColor: "#ce5a5a" }} className='px-4 py-1 rounded-md flex items-center justify-center' onClick={() => { setStatus('declined'); onRemoveItem(item.id); }}>Decline</button>
      </div>
      {status && <p>Status: {status}</p>}
    </div>
  );
}

export default Item;
