import React, { useEffect, useState } from "react";
import axios from "axios";
import './SetPassword.css'
import { useNavigate } from "react-router-dom";
function SetPassword(props) {
  const navigate = useNavigate();
  const [password, SetPassword] = useState();
  const [rePassword, SetRePassword] = useState();
  const handlePassword = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      let passwordData = {
        email: props.email,
        password: password,
      };
      console.log(passwordData);
      await axios.post("http://127.0.0.1:8000/api/pass", passwordData).then(()=>{
        navigate('/overview');
      });
    } else {
      window.alert("Passwords do not match");
    }
  };
  return (
    <>
    <div className="passwordContainer">
      <div className="passForm">
      <div className="passFormContainer">
      <div className="passText">
      <p>Reset your</p>
                <p>
                  <span className="temp">Temporary</span> password
                </p>
        </div>
      <div className="passDetails">
      <form className="setPassForm" method="POST" action="/pass" onSubmit={handlePassword}>
        <div className="setPasswordFields">
          <p>New Password</p>
        <input
          type="text"
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          placeholder="Enter password"
          required
          className="passInput"
          ></input>
        </div>
            <div className="setPasswordFields">
          <p>Re-enter your New Password</p>
        <input
          type="text"
          onChange={(e) => {
            SetRePassword(e.target.value);
          }}
          placeholder="Re-Enter password"
          required
          className="passInput"
          ></input>
          </div>
        <input className="setPasswordSubmit" type="submit" value="Sign In"></input>
      </form>
      </div>
      </div>
      </div>
      <div className="formBackground"></div>
      </div>
    </>
  );
}

export default SetPassword;
