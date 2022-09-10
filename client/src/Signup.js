import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import logo1 from "./Logo/logo1.png";
import logo2 from "./Logo/logo2.png";
import logo from "./Logo/logo.png";
import uploadLogo from "./Logo/Upload.png";
function Signup() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [VAT, setVAT] = useState();
  const [intro, setIntro] = useState();
  const [invite, setInvite] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!invite||!!fname||!lname||!email||!mobile||!address||!VAT||!intro){
      setError(true)
    }
      const data = {
        fname: fname,
        lname: lname,
        email: email,
        mobile: mobile,
        address: address,
        VAT: VAT,
        intro: intro,
        invite: invite,
      };
      console.log(data)
    await axios.post("http://127.0.0.1:8000/register", data)
  };
  return (
    <>
      <div className="signupMain">
        <div className="info">
          <img src={logo1} className="logo1" alt="logo1"></img>
          <img src={logo2} className="logo2" alt="logo2"></img>
          <img src={logo} className="logo" alt="logo"></img>
          <div className="company">
            <p>Cine Elite</p>
          </div>
        </div>
        <div className="signupDetailsContainer">
          <div className="signupDetails">
            <div className="signupText">
              <p>
                <span className="sign">Sign</span> up
              </p>
            </div>
            <div className="signupForm">
              <form
                action="/register"
                method="POST"
                onSubmit={handleSubmit}
                className="signupForm"
              >
                <div className="referral">
                  <p>Referral Code*</p>
                  <div className="refInputDiv">
                  <input
                    className="signupInput refInput"
                    onChange={(e) => {
                      setInvite(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Invite Code"
                    maxLength="6"
                  ></input>
                  {!invite&&error?<span className="referror errorField">This is a required field</span>:''}
                  </div>
                </div>
                <div className="signupFormDetails">
                  <div className="inputFields">
                  <div className="inputFieldNames">
                    <p>First Name*</p>
                    </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter First Name"
                      ></input>
                      {!fname&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields">
                    <div className="inputFieldNames">
                    <p>Last Name*</p>
                  </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Last Name"
                    ></input>
                    {!lname&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields">
                    <div className="inputFieldNames">
                    <p>Email*</p>
                  </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Email Address"
                      ></input>
                      {!email&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields">
                    <div className="inputFieldNames">
                    <p>Contact Number*</p>
                  </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      type="number"
                      placeholder="Enter Mobile Number"
                      ></input>
                      {!mobile&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields">
                    <div className="inputFieldNames">
                    <p>Billing Address*</p>
                  </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter Address"
                      ></input>
                      {!address&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields">
                    <div className="inputFieldNames">
                    <p>VAT/TAX Number*</p>
                  </div>
                    <input
                      className="signupInput"
                      onChange={(e) => {
                        setVAT(e.target.value);
                      }}
                      type="number"
                      placeholder="Enter VAT/Tax Number"
                      ></input>
                      {!VAT&&error?<span className="errorField">This is a required field</span>:''}
                  </div>
                  <div className="inputFields introField">
                    <div className="inputFieldNames">
                    <p>My Intro*</p>
                  </div>
                    <input
                      className="signupInput introInput"
                      onChange={(e) => {
                        setIntro(e.target.value);
                      }}
                      type="text"
                      placeholder="Introduction"
                      ></input>
                      {!intro&&error?<span className="introError errorField">This is a required field</span>:''}
                  </div>
                </div>
                <div className="uploadFields">
                  <div className="uploadText">
                    <p>Upload*</p>
                  </div>
                  <div className="documentUpload">
                    <div className="imagesUpload">
                      <input
                        id="vat"
                        className="document"
                        onChange={(e) => {}}
                        accept="image/*"
                        type="file"
                        name="vatPhoto"
                        ></input>
                      <label htmlFor="vat" className="uploadDocuments" >
                        Upload VAT Document &nbsp;
                        <img src={uploadLogo} alt="upload"></img>
                      </label>
                        {/* {!intro&&error?'Error':''} */}
                    </div>
                    <div className="imagesUpload">
                      <input
                        id="photo"
                        className="document"
                        onChange={(e) => {}}
                        accept="image/*"
                        type="file"
                        name="proPhoto"
                        ></input>
                      <label htmlFor="photo" className="uploadDocuments">
                        Upload Photo
                        <img src={uploadLogo} alt="upload"></img>
                      </label>
                        {/* {!intro&&error?'Error':''} */}
                    </div>
                  </div>
                </div>
                <div className="signupSubmit">
                  <input
                    className="signupButton"
                    type="submit"
                    value="Sign up"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
