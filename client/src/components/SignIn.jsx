import React from "react";
import { useNavigate } from "react-router-dom";
function SignInForm() {

  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [role, setRole] = React.useState("volunteer");
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = state;

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


    console.log("data", data)




    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />

        <div class="w-full max-w-xs">
          <label class="block text-gray-700 text-md font-bold mb-2" for="role">
            Role
          </label>
          <div class="relative">
            <select id="role" name="role" class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={(e) => setRole(e.target.value)}
            >
              <option value="volunteer">Volunteer</option>
              <option value="admin">Admin</option>
              <option value="paravet">Paravet</option>
            </select>
            {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
            </div> */}
          </div>
        </div>
        <br></br>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
