// import React, { useState } from "react";
// import "../styles/login.css"
// import SignInForm from "./SignIn";

// export default function Login() {
//   const [type, setType] = useState("signIn");
//   const handleOnClick = text => {
//     if (text !== type) {
//       setType(text);
//       return;
//     }
//   };
//   const containerClass = "container ";
//   // "container " + (type === "signUp" ? "right-panel-active" : "");
//   return (
//     <div className="App">
//       <div className={containerClass} id="container">
//         <SignInForm />
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">

//               <button
//                 className="ghost"
//                 id="signIn"
//                 onClick={() => handleOnClick("signIn")}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>EAGL</h1>
//               <p>Fighting Poverty Together.</p>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("volunteer")
  const navigate = useNavigate();



  const handleOnSubmit = async (evt) => {
    evt.preventDefault();


    const response = await fetch("http://localhost:3000/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role
        })
      }
    )

    if (!response.ok) {
      alert("Invalid Credentials");
      return;
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", role);


    console.log("data", data)

    if (role === "admin")
      navigate("/adminDashboard");
    else
      navigate("/volunteerDashboard");


  };



  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"

        >
          <img src="./public/logo.jpg" alt="logo"
            className="h-full object-cover"
          />


        </div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome to Eagle Foundation</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              required
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <div
              className="flex justify-between items-center ">
              <select id="role" name="role" className="block  w-[50%] bg-white text-gray-700 py-1 px-4 pr-4 mt-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 border border-black"
                onClick={(e) => setRole(e.target.value)}
              >
                <option value="volunteer">Volunteer</option>
                <option value="admin">Admin</option>
                <option value="paravet">Paravet</option>
              </select>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              onChange={handleOnSubmit}
            >
              Login
            </button>
          </div>


        </div>
      </div>
    </div >
  );
};
export default Login;
