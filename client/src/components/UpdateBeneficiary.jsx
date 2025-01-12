import React, { useState, useEffect } from "react";

const UpdateBeneficiary = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    taluka: "",
    city: "",
    state: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
    <div className="max-w-[900] mx-auto flex flex-col items-center  ">
      {/* changed here added flex flex-col items center */}
      <div>
        <p className="font-bold mx-8 text-[#0F75BD]  lg:text-5xl md:ext-4xl text-2xl max-w-[1240] items-center justify-center ">
          {" "}
          Update Beneficiary
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
        <div className="mb-4 flex flex-col  sm:flex-row ">
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
            id="taluka"
            type="text"
            placeholder="Taluka"
            value={formValues.taluka}
            onChange={handleChange}
          />
          <p className="text-red-400">{formErrors.taluka}</p>
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

        <input type="file" />
        <button
          type="submit"
          className="px-4 py-2    bg-[#0F75BD] rounded  font-bold text-white  "
        >
          Upload
        </button>
        <div className="flex justify-center">
          <button className="text-white font-bold  bg-[#0F75BD] rounded-lg my-6 mx-auto px-4 py-3 item-center justify-center">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBeneficiary;
