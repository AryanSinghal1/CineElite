import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CineLoginComp from '../CineLoginComp';
import './SignupRole.css'
function SignupRole() {
    const [inviteUser, setInviteUser] = useState({});
  const {invitecode} = useParams();
  const getUser = async()=>{
   const currUser = await axios.get("http://localhost:8000/api/admLogin");
   const invitedUser = currUser.data?currUser.data.filter(e=>e.password==invitecode):[];
   invitedUser[0]?setInviteUser(invitedUser[0]):setInviteUser({});
  }
  useEffect(()=>{
    getUser();
  },[]);
  return (
    <div className='mainSignupRoleContainer'>
        <CineLoginComp/>
        <div className='SignupRoleChooseContainer'>
            <div className='signupRoleDetailsContainer'>
            <div className="signupRoleText">
              <p>
                <span className="sign">Sign</span> up
              </p>
            </div>
            <div className="signupRoleFormContainer">
            <form
                action="/register"
                method="POST"
                // onSubmit={handleSubmit}
                className="signupRoleForm"
                encType="multipart/form-data"
              >
                <div className="signupRoleReferral">
                  <p>Email*</p>
                  <div className="signupRoleInputDiv">
                  <input
                    className="signupRoleInput"
                    type="text"
                    placeholder="Enter Invite Code"
                    value={inviteUser.email}
                  ></input> </div>
                </div>
                <div className="signupRoleReferral">
                  <p>Invite Code*</p>
                  <div className="signupRoleInputDiv">
                  <input
                    className="signupRoleInput"
                    type="text"
                    placeholder="Enter Invite Code"
                    maxLength="6"
                    value={inviteUser.password}
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
    </div>
  )
}

export default SignupRole;