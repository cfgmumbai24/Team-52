 import React from 'react';
 import AddBeneficiary from './assets/AddBeneficiary.svg'
 import AddVolunteer from './assets/AddVolunteer.svg';


const AdminDashboard = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Add Benificiary</h2>
             
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Add a new benificiary who will receive support from our organization</p>
                  
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'></h2>
            
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Register a new volunteer to join our team and support our mission.</p>
               
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Track Voulenteer</h2>
             
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Monitor volunteer activities, hours, and contributions.</p>
                  
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 