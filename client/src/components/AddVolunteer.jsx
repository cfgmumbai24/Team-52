// Form.js
import React from 'react';
import { useState } from 'react';



const AddVolunteer = () => {
const [firstNameValid, setFirstNameValid] = useState(false);
const [lastNameValid, setLastNameValid] = useState(false);
const [emailValid, setEmailValid] = useState(false);
const [passwordValid, setPasswordValid] = useState(false);
const [addressValid, setAddressValid] = useState(false);
const [phoneValid, setPhoneValid] = useState(false);

  return (
    <div className="max-w-[900] mx-auto">
    <div>
      <p className='font-bold mx-8 text-[#0F75BD]  lg:text-5xl md:ext-4xl text-2xl max-w-[1240] '> Add Volunteer</p>
    </div>
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-[1100] p-6 lg:text-2xl md:text-xl text-lg ">
        <div className="mb-4 flex flex-col sm:flex-row ">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="firstName"/>
          
        
          <input
  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!firstNameValid ? 'invalid' : ''}`}
  id="firstName"
  type="text"
  placeholder="First Name"
  required
  onChange={(e) => {
    const value = e.target.value;
    setFirstNameValid(value !== '');
  }}
/>

        
     
     
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName"/>
          
          
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 md:ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!lastNameValid ? 'invalid' : ''}`}
            id="lastName"
            type="text"
            placeholder="Last Name"
            required
            onChange={(e) => {
              const value = e.target.value;
              setFirstNameValid(value !== '');
            }}
          />
        </div>
  

        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"/>
         
          <input 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailValid ? 'invalid' : ''}`}
            id="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => {
              const value = e.target.value;
              setFirstNameValid(value !== '');
            }}
          />
        </div>

        <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" />
  <input
    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordValid ? 'invalid' : ''}`}
    id="password"
    type="password"
    placeholder="Password"
    required
    onChange={(e) => {
      const value = e.target.value;
      setFirstNameValid(value !== '');
    }}
  />
</div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="Taluka"/>
          
        
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${phoneValid ? 'invalid' : ''}`}
            id="phone number"
            type="text"
            placeholder="Phone Number"
          />
        </div>

              
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="Address"/>
          
        
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addressValid ? 'invalid' : ''}`}
            id="Address"
            type="text"
            placeholder="Address"
            required
            onChange={(e) => {
              const value = e.target.value;
              setFirstNameValid(value !== '');
            }}
          />
        </div>

              
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 rounded " htmlFor="Taluka"/>
          
        
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Taluka2"
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
            required
            onChange={(e) => {
              const value = e.target.value;
              setFirstNameValid(value !== '');
            }}
          />
     
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state"/>
     
          
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
            id="state"
            type="text"
            placeholder="State"
            required
            onChange={(e) => {
              const value = e.target.value;
              setFirstNameValid(value !== '');
            }}
          />
        </div>

        <button
  className='text-white font-bold bg-[#0F75BD] rounded-lg my-6 mx-auto px-4 py-3'
  onClick={() => {
    setFirstNameValid(document.getElementById('firstName').value !== '');
    setLastNameValid(document.getElementById('lastName').value !== '');
    setEmailValid(document.getElementById('email').value !== '');
    setPasswordValid(document.getElementById('password').value !== '');
    setAddressValid(document.getElementById('address').value !== '');
    setPhoneValid(document.getElementById('phone').value !== '');
  }}
>
  ADD
</button>

      </form>
    </div>
  );
};

export default AddVolunteer;