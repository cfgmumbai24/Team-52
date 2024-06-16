import React, { useEffect } from 'react';
import DynamicTable from '../DynamicTable';

import LineGraph from '../LineGraph';
const data = [
  {
    "_id": "666e417e85f6728684affd30",
    "price": 5000,
    "note": "Alpine",
    "date": "2024-06-16T01:35:58.392Z"
  },
  {
    "_id": "776e417e85f6728684affd31",
    "price": 7500,
    "note": "LaMancha",
    "date": "2024-07-20T12:00:00.000Z"
  },
  {
    "_id": "886e417e85f6728684affd32",
    "price": 3000,
    "note": "Nubian",
    "date": "2024-08-15T08:30:45.567Z"
  },
  {
    "_id": "996e417e85f6728684affd33",
    "price": 4500,
    "note": "Saanen",
    "date": "2024-09-10T14:20:10.123Z"
  },
  {
    "_id": "a06e417e85f6728684affd34",
    "price": 6200,
    "note": "Toggenburg",
    "date": "2024-10-05T10:15:25.789Z"
  },
  {
    "_id": "b16e417e85f6728684affd35",
    "price": 2800,
    "note": "Boer",
    "date": "2024-11-01T16:40:30.456Z"
  },
  {
    "_id": "c26e417e85f6728684affd36",
    "price": 5200,
    "note": "Kiko",
    "date": "2024-12-25T09:50:15.678Z"
  },
  {
    "_id": "d36e417e85f6728684affd37",
    "price": 4700,
    "note": "Oberhasli",
    "date": "2025-01-30T18:35:40.901Z"
  },
  {
    "_id": "e46e417e85f6728684affd38",
    "price": 5500,
    "note": "Nigerian Dwarf",
    "date": "2025-02-28T22:20:55.345Z"
  },
  {
    "_id": "f56e417e85f6728684affd39",
    "price": 6000,
    "note": "Pygmy",
    "date": "2025-03-25T11:05:10.123Z"
  }
]
function GoatPrice() {



  const [priceData, setPriceData] = React.useState(data);
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
      // setPriceData(data);
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
      <div className='flex justify-center items-center w-full'>
        <div className='flex gap-8 flex-col  justify-center w-full items-center'>
          <div className='w-[70%] flex justify-center'>
            <div className='text-xl '>Price History </div>
            <LineGraph data={priceData} />
          </div>

          <div className='w-[60%]'>
            <form action="" className='bg-gray-200 rounded-lg h-80  flex flex-col gap-2 items-start pl-6'>
              <h3 className='px-4 py-2 text-center  text-xl font-bold mt-2  '>Update Price</h3>

              <div className='  flex justify-center items-center gap-2 '>
                <label htmlFor=""> Price: </label>
                <input type="text" className='border-2 rounded-lg p-2  '
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className=' flex justify-center items-center gap-2 '>
                <label htmlFor=""> Comment: </label>
                <textarea className='border-2 rounded-lg p-2  w-full'
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  rows={4}
                  cols={50}
                />

              </div>


              <div className='flex justify-start  w-full'>
                <button type='submit ' className='bg-blue-300 px-3 py-2 mt-4  text-lg rounded-lg '

                  onClick={handlePriceChange}
                >Submit </button>
              </div>

            </form>
          </div>


        </div>
      </div>

      <div className=' pt-4 flex justify-center mt-8 '>
        <h1 className='text-bold text-xl '> Price Records </h1>
      </div>

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