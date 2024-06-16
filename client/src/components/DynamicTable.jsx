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
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right bg-slate-400 text-black dark:text-black">
      <thead class="text-xs text-black uppercase dark:text-black">
        <tr>
          {headers.map((header) => (
            <th key={header} className='text-center'>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {limitedData.map((row, rowIndex) => (
          <tr key={rowIndex} className=' text-center'>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DynamicTable;
