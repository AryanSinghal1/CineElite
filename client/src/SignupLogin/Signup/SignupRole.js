import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CineLoginComp from "../CineLoginComp";
import logo1 from "../../Logo/logo1.png";
import logo2 from "../../Logo/logo2.png";
import logo from "../../Logo/logo.png";
import "./SignupRole.css";
function SignupRole() {
  const [inviteUser, setInviteUser] = useState({});
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
  return (<div className="mainSignupRoleChooseContainer">
         <CineLoginComp/>
         <div className='SignupRoleChooseContainer'>
             <div className='signupRoleDetailsContainer'>
             <div className="signupRoleText">
               <p>
                 <span className="sign">Sign</span> up
               </p>
             </div>
             <div className="signupRoleFormContainer">
             <form action="/register"
                 method="POST"
                  // onSubmit={handleSubmit}
                 className="signupRoleForm"
                 encType="multipart/form-data"
               >
                 <div className="signupRoleReferral">
                   <p>Email*</p>
                   <div className="signupRoleInputDiv">
                   <input className="signupRoleInput"
                     type="text"
                     placeholder="Enter Invite Code"
                     value={inviteUser.email}
                   ></input> </div>
                 </div>
    <div className="signupRoleReferral">
                   <p>Invite Code*</p>
                   <div className="signupRoleInputDiv">
                   <input className="signupRoleInput"
                     type="text"
                     placeholder="Enter Invite Code"
                     maxLength="6"
                     value={invitecode}
                   ></input> </div>
                 </div>
                 <div className='chooseOption'>
                     <p>Register as: </p>
                 <div className='selectRoles'>
                     <input type="radio" name='role'></input>
                 </div>
                 <div className='selectRoles'>
                     <input type="radio" name='role'></input>
                 </div>
                 <div className='selectRoles'>
                     <input type="radio" name='role'></input>
                 </div>
                 <div className='selectRoles'>
                     <input type="radio" name='role'></input>
                 </div>
                 </div>
                 <div className='selectRoleContinue'>
                     <button className='selectRoleContinueButton'>Go</button>
                 </div>
                 </form>
             </div>
             </div>
         </div>
    {/* </div> */}
    </div>    
  );
}

export default SignupRole;

{/* <div className="h-screen w-screen flex bg-sky-500">
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
</div> */}
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
