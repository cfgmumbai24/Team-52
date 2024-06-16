import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddBeneficiary = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    age: 0,
    address: "",
    hamlet: "",
    city: "",
    state: "",
    block: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {

    /*  console.log(e.target) */

    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    /*  console.log(formValues); */
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);



    const response = await fetch("http://localhost:3000/api/v1/proposedbeneficiary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.firstName + " " + formValues.lastName,
        phone: formValues.phone,
        age: formValues.age,
        address: formValues.address,
        hamlet: formValues.hamlet,
        city: formValues.city,
        state: formValues.state,
        block: formValues.block
      }),
    });

    navigate("/adminDashboard")

  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/; // Regular expression for password validation

    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }

    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.taluka) {
      errors.taluka = "Taluka is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.state) {
      errors.state = "State is required!";
    }
    return errors;
  };

  return (
    <div className="h-screen max-w-[900] mx-auto flex flex-col items-center  justify-center">
      {/* changed here added flex flex-col items center */}
      <div>
        <p className="font-bold mx-8 text-[#0F75BD]  lg:text-5xl md:ext-4xl text-2xl max-w-[1240] items-center justify-center ">
          {" "}
          Propose Beneficiary
        </p>
      </div>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Added successfully!</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg px-8    pt-6 pb-8 my-4 max-w-[1240] "
      >
        <div className="mb-2 flex flex-col  sm:flex-row ">
          <div>
            {/* wrapped all  the inputs with a div to make the error texts go below the input */}
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.firstName}</p>
          </div>
          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 md:ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.lastName}</p>
          </div>
        </div>

        <div className="mb-4">
          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.phone}</p>
          </div>
        </div>

        <div className="mb-4">
          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Age"
              value={formValues.age}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.address}</p>
          </div>
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hamlet"
            type="text"
            placeholder="Hamlet"
            value={formValues.hamlet}
            onChange={handleChange}
          />
          <p className="text-red-400">{formErrors.hamlet}</p>
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="block"
            type="text"
            placeholder="Block"
            value={formValues.block}
            onChange={handleChange}
          />
          <p className="text-red-400">{formErrors.block}</p>
        </div>

        <div className="mb-4 flex flex-row  leading-tight ml-0">
          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="city"
              type="text"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.city}</p>
          </div>

          <div>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              placeholder="State"
              value={formValues.state}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.state}</p>
          </div>
        </div>

        {/* added a div to make the button center */}

        <input type="file"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="file"
          placeholder="Upload"
          onChange={(e) => setFile(e.target.files[0])}

        />

        <div className="flex justify-center">
          <button className="text-white font-bold  bg-[#0F75BD] rounded-lg my-6 mx-auto py-1 px-6  item-center justify-center">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBeneficiary;
