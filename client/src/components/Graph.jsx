// src/Graph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.Name),
    datasets: [
      {
        label: 'Age',
        data: data.map(item => item.Age),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'Age Distribution',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div>
      <h2>Age Distribution</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Graph;
