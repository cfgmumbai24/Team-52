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

            <th className='text-center'>Date</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Note</th>

          </tr>
        </thead>
        <tbody>
          {limitedData.map((row, rowIndex) => (
            <tr key={rowIndex} className=' text-center'>

              <td key={row._id}>{row.date}</td>
              <td key={row._id}>{row.price}</td>
              <td key={row._id}>{row.note}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
