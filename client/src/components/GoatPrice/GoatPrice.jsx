import React from 'react';
import DynamicTable from '../DynamicTable';

import LineGraph from '../LineGraph';

function GoatPrice() {
  const data = [
    { Date: '16/04/2024', Price: 8000 },
    { Date: '11/04/2024', Price: 7000},
    { Date: '8/04/2024', Price: 8000},
    { Date: '4/04/2024', Price: 6000},
    { Date: '1/04/2024', Price: 4500},
    { Date: '28/03/2024', Price: 8500},
    { Date: '21/03/2024', Price: 6400 },
    { Date: '17/03/2024', Price: 7700 },
    { Date: '1/03/2024', Price: 8000 },
    { Date: '29/02/2024', Price: 7000},
    { Date: '25/02/2024', Price: 8000},
    { Date: '14/02/2024', Price: 6300},
    { Date: '3/02/2024', Price: 4500},
    { Date: '31/01/2024', Price: 8500},
    { Date: '20/01/2024', Price: 6400 },
    { Date: '10/01/2024', Price: 7780 },
    { Date: '1/01/2024', Price: 8050 },
    { Date: '26/12/2023', Price: 9000 },
    { Date: '20/12/2023', Price: 6600 },
    { Date: '15/12/2023', Price: 6000 },
    { Date: '4/12/2023', Price: 8000 },
    { Date: '25/11/2023', Price: 5000 },
    { Date: '13/11/2023', Price: 8000 },
    { Date: '2/11/2023', Price: 7500 },
    { Date: '15/10/2023', Price: 4200 },
    { Date: '29/09/2023', Price: 6000 },
    { Date: '20/09/2023', Price: 11000 },
    { Date: '5/09/2023', Price: 8000 },

    
  ];

  //const dataDec= Object.assign(dataDec, data);
//const sortedData = Object.fromEntries(Object.entries(data).sort(([,a],[,b]) => a- b));


  return (
    <div className="App ">
        <div className='text-3xl text-center  text-[#0F75BD]  m-10 mb-14' >Goats Price Data</div>
        <div className='flex justify-center '>
        <div className='flex gap-8  justify-center   w-3/4'>
        <div className='w-1/3 '>
            <form action="" className='bg-gray-200 rounded-lg h-80   '>
                <h3 className='p-4 text-center my-6 text-xl font-bold mt-4  '>Update Price</h3>
                
                <div className='p-4 flex justify-center items-center gap-2 '>
                    <label htmlFor="">Enter Price: </label>
                    <input type="text" className='border-2 rounded-lg p-2  ' />
                </div>
                <div className='p-4 flex justify-center items-center gap-2'>
                    <label htmlFor="">Enter date: </label>
                    <input type="text" className='border-2 rounded-lg p-2 ' />
                </div>
                <div className='flex justify-center'>              
                <button type='submit ' className='bg-blue-300 px-3 py-2 mt-4  text-lg rounded-lg '>Submit </button>
                </div>

            </form>
        </div>
        <div className=' w-2/3'>
        <div className='text-xl '>Price History </div>
        <LineGraph data={data} />
        </div>
        
        </div>
        </div>

        <div className=' pt-4 flex justify-center mt-8 '>
      <h1 className='text-bold text-xl '> Price Records </h1>
      </div>
    {/* <div>
      <table>     
        <tbody>
        <tr>
            <th>Date</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>6 Jun</td>
            <td>28</td>
        </tr>
        <tr>
            <td>7 Jun</td>
            <td>22</td>
        </tr>
        <tr>
            <td>8 Jun</td>
            <td>35</td>
        </tr>
    </tbody></table>
    </div> */}
      <div className=' flex justify-center '>
        <div className=' w-1/2  mt-6   '>
            <DynamicTable data={data} /*maxRows={6}*/ />
        </div>
      </div>
      
      <div>
        
      </div>

    </div>
  );
}

export default GoatPrice;