import React, { useState } from "react";
import "../App.css";
import SignInForm from "./SignIn";
import SignUpForm from "../SignUp";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass = "container " ;
    // "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">

              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>EAGL</h1>
              <p>Fighting Poverty Together.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
