import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CineLoginComp from "../CineLoginComp";
import logo1 from "../../Logo/logo1.png";
import logo2 from "../../Logo/logo2.png";
import logo from "../../Logo/logo.png";
import "./SignupRole.css";
import { useDispatch } from "react-redux";
import { inviteUserCurr } from "../../Slices/Slices";
import CineLoginBasic from "../CineLoginBasic";
function SignupRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inviteUser, setInviteUser] = useState({});
  const [currUser, setCurrUser] = useState({});
  const { invitecode } = useParams();
  const getUser = async () => {
    const currUser = await axios.get("http://localhost:8000/api/admLogin");
    const invitedUser = currUser.data
      ? currUser.data.filter((e) => e.password == invitecode)
      : [];
    invitedUser[0] ? setInviteUser(invitedUser[0]) : setInviteUser({});
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleChange = (e) => {
    setCurrUser({...currUser,[e.target.name]:e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let invitedUser = {
      role: currUser.role,
      email: inviteUser.email,
      refId: inviteUser.refBy
    }
    dispatch(inviteUserCurr(invitedUser));
    navigate('/register');
  }
  return (
    <div className="w-screen h-screen flex">
      <CineLoginBasic />
      <div className="w-[65%] h-full bg-background flex justify-center items-center">
        <div className="h-[90%] w-[90%] flex flex-col justify-between items-center">
          <div className="h-[10%] w-full flex items-center">
            <p className="text-3xl font-bold">
              <span className="sign">Sign</span> up
            </p>
          </div>
          <div className="h-[90%] w-full">
            <form
              onSubmit={(e)=>{handleSubmit(e)}}
              className="h-full w-full flex flex-col justify-between items-center"
              encType="multipart/form-data"
            >
              <div className="h-[80%] w-full">
                <div className="h-[15%] w-full flex justify-between items-center">
                  <p className="text-lg font-bold">Email*</p>
                  <input
                    className="w-[70%] h-[70%] rounded-lg"
                    name="email"
                    type="text"
                    placeholder="Enter Invite Code"
                    value={inviteUser.email}
                  ></input>
                </div>
                <div className="h-[15%] w-full flex justify-between items-center">
                  <p className="text-lg font-bold">Referal Code*</p>
                  <input
                    className="w-[70%] h-[70%] rounded-lg"
                    name="code"
                    type="text"
                    placeholder="Enter Invite Code"
                    maxLength="6"
                    value={invitecode}
                  ></input>
                </div>
                <div className="h-[70%] w-full flex flex-col justify-between">
                  <p className="font-bold text-lg">Register as:</p>
                  <div className="w-full h-[95%] flex flex-col justify-between items-center">
                    <div className="h-[30%] w-full border border-slate-500 bg-white rounded-lg relative flex justify-end items-center">
                      <input
                        type="radio"
                        name="role"
              onChange={(e)=>{handleChange(e)}}
                        value={0}
                        className="top-3 left-3 absolute"
                      ></input>
                      <div className="h-[90%] w-[95%] flex flex-col">
                        <div className="h-1/2 w-full flex items-center">
                          <p className="font-bold text-[15px]">Freelancer</p>
                        </div>
                        <div className="h-1/2 w-full">
                          <p className="text-md">
                            Choose this if you are a lone ranger and you are the
                            only person in your business
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[30%] w-full border border-slate-500 bg-white rounded-lg relative flex justify-end items-center">
                      <input
                        type="radio"
                        name="role"
                        
              onChange={(e)=>{handleChange(e)}}
                        value={1}
                        className="top-3 left-3 absolute"
                      ></input>
                      <div className="h-[90%] w-[95%] flex flex-col">
                        <div className="h-1/2 w-full flex items-center">
                          <p className="font-bold text-[15px]">SME</p>
                        </div>
                        <div className="h-1/2 w-full">
                          <p className="text-md">
                          Choose this if you have multiple team members
working under one company name
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[30%] w-full border border-slate-500 bg-white rounded-lg relative flex justify-end items-center">
                      <input
                        type="radio"
                        name="role"
                        
              onChange={(e)=>{handleChange(e)}}
                        value={2}
                        className="top-3 left-3 absolute"
                      ></input>
                      <div className="h-[90%] w-[95%] flex flex-col">
                        <div className="h-1/2 w-full flex items-center">
                          <p className="font-bold text-[15px]">Manfacturer</p>
                        </div>
                        <div className="h-1/2 w-full">
                          <p className="text-md">
                          Choose this if you work for a manufacturer of
equipment or tools for this industry
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[10%] w-full flex justify-center items-center"><button className='border rounded-lg border-slate-500 px-10 py-1 bg-yellow-300 font-bold text-md'>Continue</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupRole;

{
  /* <div className="h-screen w-screen flex bg-sky-500">
<div className="h-screen flex flex-col bg-white w-1/3 relative bg-gradient-to-r from-cineBlue to-cineBlue">
  <img src={logo1} className="absolute top-0 left-0 w-2/3"></img>
  <img src={logo2} className="absolute bottom-0 right-0 w-2/3"></img>
  <img src={logo} className="absolute bottom-3 left-3 w-1/8"></img>
</div>
<div className="h-screen flex bg-black w-2/3">
  <p className="text-red-700 font-bold mb-10 ">
    Welcome!
  </p>
</div>
</div> */
}
{
  /*      <CineLoginComp/>
     <div className='SignupRoleChooseContainer'>
         <div className='signupRoleDetailsContainer'>
         <div className="signupRoleText">
           <p>
             <span className="sign">Sign</span> up
//           </p>
//         </div>
//         <div className="signupRoleFormContainer">
//         <form */
}
{
  /* //             action="/register"
//             method="POST"
//             // onSubmit={handleSubmit}
//             className="signupRoleForm"
//             encType="multipart/form-data"
//           >
//             <div className="signupRoleReferral">
//               <p>Email*</p>
//               <div className="signupRoleInputDiv">
//               <input */
}
{
  /* //                 className="signupRoleInput"
//                 type="text"
//                 placeholder="Enter Invite Code"
//                 value={inviteUser.email}
//               ></input> </div>
//             </div> */
}
{
  /* //             <div className="signupRoleReferral">
//               <p>Invite Code*</p>
//               <div className="signupRoleInputDiv">
//               <input */
}
{
  /* //                 className="signupRoleInput"
//                 type="text"
//                 placeholder="Enter Invite Code"
//                 maxLength="6"
//                 value={invitecode}
//               ></input> </div>
//             </div> */
}
{
  /* //             <div className='chooseOption'>
//                 <p>Register as: </p>
//             <div className='selectRoles'>
//                 <input type="radio" name='role'></input>
//             </div>
//             <div className='selectRoles'>
//                 <input type="radio" name='role'></input>
//             </div>
//             <div className='selectRoles'>
//                 <input type="radio" name='role'></input>
//             </div>
//             <div className='selectRoles'>
//                 <input type="radio" name='role'></input>
//             </div>
//             </div>
//             <div className='selectRoleContinue'>
//                 <button className='selectRoleContinueButton'>Go</button>
//             </div>
//             </form>
//         </div>
//         </div>
//     </div>
</div> */
}
