import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../Firebase";

function SignUpScreen({ input }) {
  const [show, setShow] = useState(true);
  const [condition, setCondition] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input
          className="signUpScreen_email"
          placeholder="Email"
          type="email"
          ref={emailRef}
          value={input}
          onChange={(e) => e.target.value}
        />
        <input
          className="signUpScreen_password"
          placeholder="Password"
          type={show ? "password" : "text"}
          ref={passwordRef}
        />

        <label>
          <input type="checkbox" onChange={() => setShow(!show)} />
          {show ? "Show" : "Hide"}
        </label>
        <button className="signUpScreen_button" type="submit" onClick={signIn}>
          Sumbit
        </button>
        <h4 className="signUpScreen_gray">
          New to Netflix?
          <span className="signUpScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
