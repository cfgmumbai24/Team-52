// src/DynamicTable.js
import React from 'react';
import './Dynamic.css';

const DynamicTable = ({ data, maxRows }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);
  const limitedData = maxRows ? data.slice(0, maxRows) : data;

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {limitedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
