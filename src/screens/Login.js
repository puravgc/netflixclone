import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup";
const Login = () => {
  const [signin, setsignin] = useState(false)
  return (
    <div className="login">
      {signin?<Signup/> :
      (
        <>
        <div className="toppart">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
        <button onClick={()=>{setsignin(true)}}>Sign In</button>
      </div>
      <div className="maincont">
        <div className="content">
          <div className="text">
            <h1>Unlimited movies, TV shows, and more</h1>
            <div className="middletext">
              <h2>Watch anywhere. Cancel anytime.</h2>
              <br />  
            </div>
            <h2>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
            <form className="form">
              <input placeholder="Email Address" type="email"></input>
              <button onClick={()=>{setsignin(true)}}>Get Started &#62;</button>
            </form>
          </div>
        </div>
      </div>
      </>
      )   }
    </div>
  );
};

export default Login;
