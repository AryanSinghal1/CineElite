import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SetPassword from "./SetPassword";
import "./Verify.css";
function Verify() {
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState(false);
  const [coderr, setCodErr] = useState(false);
  const verifyit = async (e) => {
    const verifyData = await axios.get("http://localhost:8000/api/admlogin");
    const getVerifyData = verifyData.data;
    const data = getVerifyData.filter((e) => {
      return e.email == email && e.registered;
    });
    if(data[0]){
      if (data[0].password == password) {
        setVerified(true);
      }else{
        setCodErr(true)
      }
    }else{
      setErr(true);
    }
    };
  console.log(verified);
  return (
    <>
      {!verified ? 
      (
        <SetPassword email={email} />
      ) : 
      (
        <>
          <div className="mainVerify">
            <div className="verifyForm">
              <div className="verifyFormContainer">
              <div className="verifyFormText">
                <p>Enter your</p>
                <p>
                  <span className="temporary">Temporary</span> password
                </p>
                </div>
                <div className="verifyDetails">
                <div className="inputVerifyFields">
                  <p>Email</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email"
                  className="verifyInput"
                  ></input>
                </div>
                    <div className="inputVerifyFields">
                <p>Temporary password</p>
                <input
                  type="text"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Password"
                  className="verifyInput"
                  ></input>
                  </div>
                <button onClick={verifyit} className="verifyButton">Proceed</button>
                {err?<span className="error">User not verified yet.</span>:''}
                {coderr?<span className="error">Incorrect Temporary password.</span>:''}
                  </div>
              </div>
            </div>
            <div className="background"></div>
          </div>
        </>
      )}
    </>
  );
}

export default Verify;
