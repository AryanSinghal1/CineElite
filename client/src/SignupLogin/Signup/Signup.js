// import React, { useState } from "react";
// import axios from "axios";
// import "./Signup.css";
// import uploadLogo from "../../Logo/Upload.png";
// import CineLoginComp from "../CineLoginComp";
// function Signup() {
  //   const [fname, setFname] = useState();
  //   const [lname, setLname] = useState();
//   const [email, setEmail] = useState();
//   const [mobile, setMobile] = useState();
//   const [address, setAddress] = useState();
//   const [VAT, setVAT] = useState();
//   const [intro, setIntro] = useState();
//   const [invite, setInvite] = useState();
//   const [error, setError] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(false);
//   const [signUp, setSignUp] = useState(false);
//   const [vatDoc, setVatDoc] = useState(false);
//   const [invalid, setInvalid] = useState(false);
//   const [user, setUser] = useState(false);
//   const handleSubmit = async (e) => {
  //     e.preventDefault();
//     if(!invite||!!fname||!lname||!email||!mobile||!address||!VAT||!intro){
//       setError(true)
//     }
//       const data = {
//         fname: fname,
//         lname: lname,
//         email: email,
//         mobile: mobile,
//         address: address,
//         VAT: VAT,

import { useSelector } from "react-redux";
import SignupFreelancer from "./SignupFreelancer";
import SignupManufacturer from "./SignupManufacturer";
import SignupSME from "./SignupSME";

  
//         intro: intro,
//         invite: invite,
//         profile: profilePhoto,
//         vatDoc: vatDoc
//       };
//       console.log(data)
//     await axios.post("http://127.0.0.1:8000/api/register", data).then(e=>{switch (e.data) {
//       case 0:
//         setSignUp(true)
//         break;
//       case 1:
//         setInvalid(true)
//         console.log("invalid code")
//         break;
//         case 2:
//           setUser(true)
//           break;
//     };console.log(e.data)}).catch(e=>console.log(e));
//   };
//   const handleUploadImages = (e) =>{
//     let file = e.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (re) => {
//       setProfilePhoto(re.target.result)
//     };
//   }
//   const handleuploadDoc = (e) =>{
//     let file = e.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (re) => {
//       setVatDoc(re.target.result)
//     };
//   }
//   return (
//     <>{!signUp?(
//       <div className="signupMain">
//         <CineLoginComp/>
//         <div className="signupDetailsContainer">
//           <div className="signupDetails">
//             <div className="signupText">
//               <p>
//                 <span className="sign">Sign</span> up
//               </p>
//             </div>
//             <div className="signupForm">
//               <form
//                 action="/register"
//                 method="POST"
//                 onSubmit={handleSubmit}
//                 className="signupForm"
//                 encType="multipart/form-data"
//               >
//                 <div className="referral">
//                   <p>Referral Code*</p>
//                   <div className="refInputDiv">
//                   <input
//                     className="signupInput refInput"
//                     onChange={(e) => {
//                       setInvite(e.target.value);
//                     }}
//                     type="text"
//                     placeholder="Enter Invite Code"
//                     maxLength="9"
//                   ></input>
// {invalid?<span className="referror errorField">Invalid Code</span>:''}
//                   {!invite&&error?<span className="referror errorField">This is a required field</span>:''}
//                   </div>
//                 </div>
//                 <div className="signupFormDetails">
//                   <div className="inputFields">
//                   <div className="inputFieldNames">
//                     <p>First Name*</p>
//                     </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setFname(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter First Name"
//                       ></input>
//                       {!fname&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields">
//                     <div className="inputFieldNames">
//                     <p>Last Name*</p>
//                   </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setLname(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter Last Name"
//                     ></input>
//                     {!lname&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields">
//                     <div className="inputFieldNames">
//                     <p>Email*</p>
//                   </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter Email Address"
//                       ></input>
//                       {!email&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields">
//                     <div className="inputFieldNames">
//                     <p>Contact Number*</p>
//                   </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setMobile(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Enter Mobile Number"
//                       ></input>
//                       {!mobile&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields">
//                     <div className="inputFieldNames">
//                     <p>Billing Address*</p>
//                   </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setAddress(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Enter Address"
//                       ></input>
//                       {!address&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields">
//                     <div className="inputFieldNames">
//                     <p>VAT/TAX Number*</p>
//                   </div>
//                     <input
//                       className="signupInput"
//                       onChange={(e) => {
//                         setVAT(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Enter VAT/Tax Number"
//                       ></input>
//                       {!VAT&&error?<span className="errorField">This is a required field</span>:''}
//                   </div>
//                   <div className="inputFields introField">
//                     <div className="inputFieldNames">
//                     <p>My Intro*</p>
//                   </div>
//                     <input
//                       className="signupInput introInput"
//                       onChange={(e) => {
//                         setIntro(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Introduction"
//                       ></input>
//                       {!intro&&error?<span className="introError errorField">This is a required field</span>:''}
//                   </div>
//                 </div>
//                 <div className="uploadFields">
//                   <div className="uploadText">
//                     <p>Upload*</p>
//                   </div>
//                   <div className="documentUpload">
//                     <div className="imagesUpload">
//                       <input
//                         id="vat"
//                         className="document"
//                         onChange={handleuploadDoc}
//                         accept="application/pdf"
//                         type="file"
//                         name="vatPhoto"
//                         ></input>
//                       <label htmlFor="vat" className="uploadDocuments" >
//                         Upload VAT Document &nbsp;
//                         <img src={uploadLogo} alt="upload"></img>
//                       </label>
//                         {/* {!intro&&error?'Error':''} */}
//                     </div>
//                     <div className="imagesUpload">
//                       <input
//                         id="photo"
//                         className="document"
//                         onChange={handleUploadImages}
//                         accept="image/*"
//                         type="file"
//                         name="proPhoto"
//                         ></input>
//                       <label htmlFor="photo" className="uploadDocuments">
//                         Upload Photo
//                         <img src={uploadLogo} alt="upload"></img>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="signupSubmit">
//                   <input
//                     className="signupButton"
//                     type="submit"
//                     value="Sign up"
//                   ></input>
//                   {user?<p className="errorUser">User not referred</p>:''}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>):<div className="signupMain"><div className="confirmation"><div className="confirmationTextContainer"><p className="registerDone">Thank You For <span className="reg">Registering.</span></p><p>Within <span className="reg">X</span> hours,</p><p>You'll get a confirmation email.</p></div></div><div className="confirmationBackground"></div></div>}
//     </>
//   );
// }

function Signup() {
  const currInviteUser = useSelector(state=>state.user.currInviteUser);
  return (
    currInviteUser.role==0?<SignupFreelancer/>:currInviteUser.role==1?<SignupSME/>:<SignupManufacturer/>
  )
}
export default Signup;