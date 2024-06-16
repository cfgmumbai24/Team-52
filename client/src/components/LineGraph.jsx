// src/LineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineGraph = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date.slice(0, 10)),
    datasets: [
      {
        label: 'Price',
        data: data.map(item => item.price),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className='w-full'>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
