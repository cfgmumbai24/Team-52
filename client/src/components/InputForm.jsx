// src/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (date && price) {
      onSubmit({ Date: date, Price: parseFloat(price) });
      setDate('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
