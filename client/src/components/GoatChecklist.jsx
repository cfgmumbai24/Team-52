import React, { useState } from 'react'

const GoatChecklist = () => {

  // State variables to keep track of checklist items
  const [tag, setTag] = useState('');
  const [gender, setGender] = useState('');
  const [mortalityDate, setMortalityDate] = useState('');
  const [vaccinationStatus, setVaccinationStatus] = useState(false);
  const [pregnancyStatus, setPregnancyStatus] = useState(false);
  const [soldStatus, setSoldStatus] = useState(false);
  const [distributionDate, setDistributionDate] = useState('');
  const [beneficiaryId, setBeneficiaryId] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data here
    console.log('Form submitted');
  };

  return (

    <div className=" container mx-auto p-4 ">
      <div className=" flex  lg:text-5xl md:text-4xl text-3xl font-bold text-[#0F75BD] mb-6 justify-center">Checklist</div>


      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded-lg px-8 py-5 pt-6 pb-8 my-4 md:w-[900] mt-6 text-xl">
          <div className=" mb-4 ">
            <label htmlFor="tag" className="font-bold mb-2 mr-2">
              Tag:
            </label>
            <input
              type="text"
              id="tag"
              className="border border-gray-400 p-2 rounded"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <div className="mb-4 flex flex-col-3 mr-4">
            <label htmlFor="gender" className="font-bold mb-2 mr-4">
              Gender:
            </label>
            <div>
              <label htmlFor="male" className="mr-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label htmlFor="female" className="mr-2 px-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="mortalityDate" className="font-bold mb-2 mr-2 ">
              Mortality Date:
            </label>
            <input
              type="date"
              id="mortalityDate"
              className="border border-gray-400 p-2 rounded "
              value={mortalityDate}
              onChange={(e) => setMortalityDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="vaccinationStatus" className="font-bold mb-2 mr-2 ">
              Vaccination Status:
            </label>
            <input
              type="checkbox"
              id="vaccinationStatus"
              checked={vaccinationStatus}
              onChange={(e) => setVaccinationStatus(e.target.checked)}
              className='items-center'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pregnancyStatus" className="font-bold mb-2 mr-2">
              Pregnancy Status:
            </label>
            <input
              type="checkbox"
              id="pregnancyStatus"
              checked={pregnancyStatus}
              onChange={(e) => setPregnancyStatus(e.target.checked)}
              className='items-center'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="soldStatus" className="font-bold mb-2 mr-2">
              Sold Status:
            </label>
            <input
              type="checkbox"
              id="soldStatus"
              checked={soldStatus}
              onChange={(e) => setSoldStatus(e.target.checked)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="distributionDate" className="font-bold mb-2 mr-2">
              Date of Distribution:
            </label>
            <input
              type="date"
              id="distributionDate"
              className="border border-gray-400 p-2 rounded"
              value={distributionDate}
              onChange={(e) => setDistributionDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="beneficiaryId" className="font-bold mb-2 mr-2">
              Beneficiary ID:
            </label>
            <input
              type="text"
              id="beneficiaryId"
              className="border border-gray-400 p-2 rounded"
              value={beneficiaryId}
              onChange={(e) => setBeneficiaryId(e.target.value)}
            />
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="flex bg-[#0F75BD]  text-white font-bold py-2 px-4 rounded justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}




export default GoatChecklist
