// src/DatePriceTable.js
import React, { useState, useEffect } from 'react';
import './components/DatePriceTable.css';

const DatePriceTable = ({ data }) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => new Date(b.Date) - new Date(a.Date));
    setSortedData(sorted);
  }, [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{row.Date}</td>
              <td>{row.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatePriceTable;
