import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./landingpage.css";

const LandingPage = () => {
  const [userName, setUserName] = useState("");
  const submitHandler = () => {
    localStorage.setItem("userName", userName);
    window.location.reload(true);
  };
  return (
    <div>
      <div className='wrapper landing-image'>
        <div className='landing-box'>
          <div className='landing-heading'>
            <h1>Hello, Welcome to spotlight ,</h1>
          </div>
          <div>
            <input
              className='landing-input'
              type='text'
              placeholder='Please enter your good name '
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button className='landing-btn' type='submit' onClick={submitHandler}>
            Next <ArrowRightAltIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
