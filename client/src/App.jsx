// src/App.js
import React from 'react';
import DynamicTable from './components/DynamicTable';
import Graph from './components/Graph';
import LineGraph from './components/LineGraph';

function App() {
  const data = [
    { Date: '6 Jun', Price: 28 },
    { Date: '7 Jun', Price: 22 },
    { Date: '8 Jun', Price: 35},
    { Date: '9 Jun', Price: 30},
    { Date: '10 Jun', Price: 45 },
    { Date: '11 Jun', Price: 32},
    { Date: '12 Jun', Price: 29 },
    { Date: '13 Jun', Price: 27 },
  ];

  return (
    <div className="App">
      <h1>Goats Price History</h1>
      <DynamicTable data={data} maxRows={6} />
      <LineGraph data={data} />
      <div>
        <p>All Time High - Best Price For Selling - 45 on 10 Jun</p>
      </div>
      <div>
        <p>All Time Low - Best Price For Buying - 22 on 7 Jun</p>
      </div>
    </div>
  );
}

export default App;

// src/App.js
// import React, { useState } from 'react';
// import DatePriceTable from './components/DatePrice';
// import InputForm from './components/InputForm';

// function App() {
//   const [data, setData] = useState([
//     { Date: '2023-06-01', Price: 100 },
//     { Date: '2023-05-21', Price: 150 },
//     { Date: '2023-04-15', Price: 200 },
//     { Date: '2023-03-11', Price: 250 },
//     { Date: '2023-02-18', Price: 300 },
//   ]);

//   const handleFormSubmit = (newEntry) => {
//     setData((prevData) => [...prevData, newEntry]);
//   };

//   return (
//     <div className="App">
//       <h1>Date and Price Table Example</h1>
//       <InputForm onSubmit={handleFormSubmit} />
//       <DatePriceTable data={data} />
//     </div>
//   );
// }

// export default App;
