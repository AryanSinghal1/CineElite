import React, { useEffect, useState } from "react";
import { Route, Router, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import SignupUsers from "./SignupUsers";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Verify from "./Verify";
import Overview from "./Overview";
import Update from "./Update";
import NoLogin from "./NoLogin";
// import {createMemoryHistory} from 'history';
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/admInvite" element={<Home />}/>
        <Route exact path="/register" element={<Signup />}/>
        <Route exact path="/admverify" element={<SignupUsers />}/>
        <Route exact path="/overview" element={<Overview/>}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/nologin" element={<NoLogin />}/>
        <Route exact path="/verify" element={<Verify/>}/>
        <Route exact path="/update" element={<Update/>}/>
        <Route exact path="/userlogin" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
