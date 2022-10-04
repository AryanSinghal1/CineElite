import React, { useEffect, useState } from "react";
import { Route, Router, Routes, Switch } from "react-router-dom";
import Signup from "./SignupLogin/Signup/Signup";
import SignupUsers from "./Verification/SignupUsers";
import Dashboard from "./Dashboard";
import Login from "./SignupLogin/Login";
import Verify from "./SignupLogin/Verify";
import Overview from "./Dashboard/Overview";
import Update from "./Profile/Update";
import NoLogin from "./SignupLogin/NoLogin";
import Home from "./HomePage/Home";
// import {createMemoryHistory} from 'history';
import axios from "axios";
import Profile from "./Profile/Profile";
import CalendarModal from "./Scheduling/CalendarModal";
import Scheduling from "./Scheduling/Scheduling";
import UserProfile from "./Profile/UserProfile";
import Invite from "./InvitePage/Invite";
import SignupRole from "./SignupLogin/Signup/SignupRole";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/role/:invitecode" element={<SignupRole />}/>
        <Route exact path="/calendar" element={<CalendarModal />}/>
        <Route exact path="/admInvite" element={<Invite />}/>
        <Route exact path="/scheduling" element={<Scheduling />}/>
        <Route exact path="/register" element={<Signup />}/>
        <Route exact path="/admverify" element={<SignupUsers />}/>
        <Route exact path="/overview" element={<Overview/>}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/nologin" element={<NoLogin />}/>
        <Route exact path="/verify" element={<Verify/>}/>
        <Route exact path="/update" element={<Update/>}/>
        <Route exact path="/userlogin" element={<Login/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/userprofile" element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
