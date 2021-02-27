import React, { useState } from "react";
import LogoPng from "./netflix_logo.png";
import "./LoginScreen.css";
//Functional component
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [input, setInput] = useState();
  console.log(input);
  return (
    <div className="loginScreen">
      <header>
        <img src={LogoPng} className="loginScreen_logo" />
        <button
          className="loginScreen_button"
          onClick={() => setSignIn(!signIn)}
        >
          {signIn ? "X" : "Sign In"}
        </button>
      </header>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen input={input} />
        ) : (
          <div className="loginScreen_bodyContents">
            <div className="loginScreen_bodyFilter">
              <h1>Unlimited films, Tv Programmes and more!</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input
                    placeholder="Email address"
                    type="email"
                    required={true}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    className="loginScreen_getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
