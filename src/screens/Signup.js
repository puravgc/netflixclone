import React, { useRef } from "react";
import "./Signup.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const signup = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="signup">
      <div className="top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
      </div>
      <div className="containersignup">
        <div className="signupbox">
          <div className="maincontent">
            <form>
              <h1>Sign In</h1>
              <div className="inputs">
                <input
                  ref={emailRef}
                  placeholder="E-mail or phone number"
                  type="text"
                ></input>
                <br />
                <input
                  ref={passwordRef}
                  placeholder="Password"
                  type="password"
                ></input>
              </div>
              <br />
              <button onClick={signup}>Sign In</button>
              <div className="first">
                <input type="checkbox"></input>
                Remember Me
              </div>
              <h2>
                New to Netflix?
                <span>
                  <a onClick={register}>Sign up now.</a>
                </span>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
