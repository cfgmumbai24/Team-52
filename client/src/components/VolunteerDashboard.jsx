import React from 'react';
import AddBeneficiary from '../assets/Addbenef.svg';
import AddVolunteer from '../assets/addVolunteer.svg';
import TrackVolunteer from '../assets/TrackVolunteer.svg'; 



const AdminDashboard = () => {
 return (
    <div className='w-full py-[10rem] px-4 bg-white p-6 justify-center'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
             <img className='w-20 mx-auto mt-[-3rem] bg-white' src={AddBeneficiary} alt="/" />
             <h2 className='text-2xl font-bold text-center py-8'>Propose Benificiary</h2>
            
             <div className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'>Add a new benificiary will be added to the database.</p>
                 
             </div>
             <button className='bg-[#0F75BD] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Add</button>
         </div>
         <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
             <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={AddVolunteer} alt="/" />
             <h2 className='text-2xl font-bold text-center py-8'>Health checkup</h2>
           
             <div className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'>Animal health checkup</p>
              
             </div>
             <button className='bg-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check Health </button>
         </div>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
             <img className='w-20 mx-auto mt-[-3rem] bg-white' src={TrackVolunteer} alt="/" />
             <h2 className='text-2xl font-bold text-center py-8'>Update Details</h2>
            
             <div className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'>Update the details of the benificiary</p>
                 
             </div>
             <button className='bg-[#0F75BD] text-white w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3'>Update</button>
         </div>
     </div>
   </div> 
  
 );
};

export default AdminDashboard; 