// Form.js
import React from 'react';


const AddVolunteer = () => {
  return (
    <div className="max-w-[900] mx-auto">
    <div>
      <p className='font-bold mx-8 text-[#0F75BD]  lg:text-5xl md:ext-4xl text-2xl max-w-[1240] '> Add Volunteer</p>
    </div>
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-[1240] ">
        <div className="mb-4 flex flex-col sm:flex-row ">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="firstName"/>
          
        
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        
     
     
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName"/>
          
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 md:ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
  

        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"/>
         
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </div>

              
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="Address"/>
          
        
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Address"
            type="text"
            placeholder="Address"
          />
        </div>

              
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="Taluka"/>
          
        
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Taluka"
            type="text"
            placeholder="Taluka"
          />
        </div>

        <div className="mb-4 flex flex-row  leading-tight ml-0">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="City"/>
           
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id="city"
            type="text"
            placeholder="City"
          />
     
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state"/>
     
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            placeholder="State"
          />
        </div>

        <button className='text-white font-bold  bg-[#0F75BD] rounded-lg my-6 mx-auto px-4 py-3'>ADD</button>
      </form>
    </div>
  );
};

export default AddVolunteer;