import React, { useEffect } from 'react';
import DynamicTable from '../DynamicTable';

import LineGraph from '../LineGraph';

function GoatPrice() {
  const data12 = [
    { Date: '16/04/2024', Price: 8000 },
    { Date: '11/04/2024', Price: 7000 },
    { Date: '8/04/2024', Price: 8000 },
    { Date: '4/04/2024', Price: 6000 },
    { Date: '1/04/2024', Price: 4500 },
    { Date: '28/03/2024', Price: 8500 },
    { Date: '21/03/2024', Price: 6400 },
    { Date: '17/03/2024', Price: 7700 },
    { Date: '1/03/2024', Price: 8000 },
    { Date: '29/02/2024', Price: 7000 },
    { Date: '25/02/2024', Price: 8000 },
    { Date: '14/02/2024', Price: 6300 },
    { Date: '3/02/2024', Price: 4500 },
    { Date: '31/01/2024', Price: 8500 },
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

  const [priceData, setPriceData] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [comment, setComment] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/v1/getPrice');
      const data = await response.json();
      if (response.status !== 200) {
        console.log('Error fetching data')
        return
      }
      console.log("data", data)
      setPriceData(data);
    }
    fetchData();
  }, []);

  const handlePriceChange = async (e) => {

    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/v1/updatePrice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: price,
        notice: comment
      })
    });

    const data = await response.json();
    if (response.status !== 200) {
      console.log('Error updating price')
      return
    }

    console.log("data", data)
    setPriceData([...priceData, data]);
  }

  //const dataDec= Object.assign(dataDec, data);
  //const sortedData = Object.fromEntries(Object.entries(data).sort(([,a],[,b]) => a- b));


  return (
    <div className="App ">
      <div className='text-3xl text-center  text-[#0F75BD]  m-10 mb-14' >Goats Price Data</div>
      <div className='flex justify-center '>
        <div className='flex gap-8  justify-center   w-3/4'>
          <div className='w-1/3 '>
            <form action="" className='bg-gray-200 rounded-lg h-80  flex flex-col gap-2 items-start pl-6'>
              <h3 className='p-4 text-center  text-xl font-bold mt-2  '>Update Price</h3>

              <div className='  flex justify-center items-center gap-2 '>
                <label htmlFor=""> Price: </label>
                <input type="text" className='border-2 rounded-lg p-2  '
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className=' flex justify-center items-center gap-2 '>
                <label htmlFor=""> Comment: </label>
                <textarea className='border-2 rounded-lg p-2  '
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  rows={6}
                  cols={20}
                />

              </div>



              <div className='flex justify-center'>
                <button type='submit ' className='bg-blue-300 px-3 py-2 mt-4  text-lg rounded-lg '

                  onClick={handlePriceChange}
                >Submit </button>
              </div>

            </form>
          </div>
          <div className=' w-2/3'>
            <div className='text-xl '>Price History </div>
            <LineGraph data={priceData} />
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
          <DynamicTable data={priceData} /*maxRows={6}*/ />
        </div>
      </div>

      <div>

      </div>

    </div>
  );
}

export default GoatPrice;