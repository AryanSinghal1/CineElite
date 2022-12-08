import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import uploadLogo from "../../Logo/Upload.png";
import CineLoginComp from "../CineLoginComp";

function SignupFreelancer() {
  const currInviteUser = useSelector(state=>state.user.currInviteUser);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [VAT, setVAT] = useState();
    const [intro, setIntro] = useState();
    const [invite, setInvite] = useState();
    const [error, setError] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [vatDoc, setVatDoc] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [user, setUser] = useState(false);  
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!invite||!!fname||!lname||!email||!mobile||!address||!VAT||!intro){
          setError(true)
        }
          const data = {
            fname: fname,
            lname: lname,
            email: currInviteUser.email,
            mobile: mobile,
            address: address,
            VAT: VAT,
            intro: intro,
            profile: profilePhoto,
            vatDoc: vatDoc
          };
          console.log(data)
        await axios.post("http://127.0.0.1:8000/api/register", data).then(e=>{switch (e.data) {
          case 0:
            setSignUp(true)
            break;
          case 1:
            setInvalid(true)
            console.log("invalid code")
            break;
            case 2:
              setUser(true)
              break;
        };console.log(e.data)
      }
        )
        .catch(e=>console.log(e));
      };
      const handleUploadImages = (e) =>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (re) => {
          setProfilePhoto(re.target.result)
        };
      }
      const handleuploadDoc = (e) =>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (re) => {
          setVatDoc(re.target.result)
        };
      }    
  return (
    <>{!signUp?<div className="w-screen h-screen flex">
      <CineLoginComp />
      <div className="w-[65%] h-full bg-background flex justify-center items-center">
        <div className="h-[98%] w-[90%] flex flex-col justify-between items-center">
          <div className="h-[8%] w-full flex items-center">
            <p className="text-3xl font-bold">
              <span className="sign">Sign</span> up
            </p>
          </div>
          <div className="h-[90%] w-full flex justify-center items-center flex-wrap">
            <form
              action="/register"
              method="POST"
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-between items-center"
              encType="multipart/form-data"
            >
              <div className="w-full flex flex-wrap h-[70%]">
                <div className="w-1/2 h-1/5 flex flex-col justify-center">
                  <div className="inputFieldNames flex align-center">
                    <p>First Name*</p>
                  </div>
                  <input
                    className="m-0 py-1 w-[350px] rounded-lg placeholder-gray-400"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter First Name"
                  ></input>
                  {!fname && error ? (
                    <span className="errorField">This is a required field</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-1/2 h-1/5">
                <div className="inputFieldNames">
                    <p>Last Name*</p>
                  </div>
                  <input
                    className="m-0 py-1 w-[350px] rounded-lg placeholder-gray-400"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Last Name"
                  ></input>
                  {!lname && error ? (
                    <span className="errorField">This is a required field</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-1/2 h-1/5">
                  <div className="inputFieldNames">
                    <p>Contact Number*</p>
                  </div>
                  <input
                    className="m-0 py-1 w-[350px] rounded-lg placeholder-gray-400"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    type="number"
                    placeholder="Enter Mobile Number"
                  ></input>
                  {!mobile && error ? (
                    <span className="errorField">This is a required field</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-1/2 h-1/5">
                  <div className="inputFieldNames">
                    <p>VAT/TAX Number*</p>
                  </div>
                  <input
                    className="m-0 py-1 w-[350px] rounded-lg placeholder-gray-400"
                    onChange={(e) => {
                      setVAT(e.target.value);
                    }}
                    type="number"
                    placeholder="Enter VAT/Tax Number"
                  ></input>
                  {!VAT && error ? (
                    <span className="errorField">This is a required field</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-full h-2/5 flex flex-col">
                  <div className="w-full h-[10%] flex items-center">
                    <p>Billing Address*</p>
                  </div>
                  <textarea
                  rows={4}
                    className="w-[95%] rounded-lg h-[80%] resize-none placeholder-gray-400"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Address"
                  ></textarea>
                  {!address && error ? (
                    <span className="errorField">This is a required field</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="h-1/5 w-full">
                  <div className="inputFieldNames">
                    <p>My Intro*</p>
                  </div>
                  <input
                    className="m-0 py-1 w-[95%] rounded-lg placeholder-gray-400"
                    onChange={(e) => {
                      setIntro(e.target.value);
                    }}
                    type="text"
                    placeholder="Introduction"
                  ></input>
                  {!intro && error ? (
                    <span className="introError errorField">
                      This is a required field
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="h-[20%] w-full flex flex-col">
              <div className="h-2/3 w-full flex flex-col justify-between">
                <div className="w-full h-[15%]">
                  <p>Upload*</p>
                </div>
                <div className="w-full h-[65%] flex justify-between">
                  <div className="">
                    <input
                      id="vat"
                      className="hidden absolute"
                      onChange={handleuploadDoc}
                      accept="application/pdf"
                      type="file"
                      name="vatPhoto"
                    ></input>
                    <label htmlFor="vat" className="uploadDocuments">
                      Upload VAT Document &nbsp;
                      <img src={uploadLogo} alt="upload"></img>
                    </label>
                    {/* {!intro&&error?'Error':''} */}
                  </div>
                  <div className="">
                    <input
                      id="photo"
                      className="hidden absolute"
                      onChange={handleUploadImages}
                      accept="image/*"
                      type="file"
                      name="proPhoto"
                    ></input>
                    <label htmlFor="photo" className="uploadDocuments">
                      Upload Photo
                      <img src={uploadLogo} alt="upload"></img>
                    </label>
                  </div>
                </div>
              </div>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center">
                <button className="px-10 font-bold rounded-lg bg-yellow-300 text-lg">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>:<div className="signupMain"><div className="confirmation"><div className="confirmationTextContainer"><p className="registerDone">Thank You For <span className="reg">Registering.</span></p><p>Within <span className="reg">X</span> hours,</p><p>You'll get a confirmation email.</p></div></div><div className="confirmationBackground"></div></div>}</>
  );
}

export default SignupFreelancer;
