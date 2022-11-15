import React from "react";
import { Route, Routes} from "react-router-dom";
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
import Profile from "./Profile/Profile";
import CalendarModal from "./Scheduling/CalendarModal";
import Scheduling from "./Scheduling/Scheduling";
import UserProfile from "./Profile/UserProfile";
import Invite from "./InvitePage/Invite";
import SignupRole from "./SignupLogin/Signup/SignupRole";
import Communication from "./Message/Communication";
import Documents from "./Documents/Documents";
import Customers from "./Customers";
import Billing from "./Billing/Billing";
import BillingCustomers from "./Billing/BillingCustomers";
import BillingSuppliers from "./Billing/BillingSuppliers";
import MonthScheduling from "./Scheduling/MonthScheduling";
import DayScheduling from "./Scheduling/DayScheduling";
// import ChatPage from "./Trash/ChatPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/role/:invitecode" element={<SignupRole />}/>
        <Route path="/role" element={<SignupRole />}/>
        <Route exact path="/calendar" element={<CalendarModal />}/>
        <Route exact path="/admInvite" element={<Invite />}/>
        <Route exact path="/scheduling" element={<Scheduling />}/>
        <Route exact path="/mscheduling" element={<MonthScheduling />}/>
        <Route exact path="/dscheduling" element={<DayScheduling />}/>
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
        <Route path="/messages/:id" element={<Communication/>}/>
        <Route path="/messages/" element={<Communication/>}/>
        <Route exact path="/documentsUser" element={<Documents/>}/>
        <Route exact path="/customers" element={<Customers/>}/>
        <Route exact path="/billing" element={<Billing/>}/>
        <Route exact path="/billingcustomers" element={<BillingCustomers/>}/>
        <Route exact path="/billingsuppliers" element={<BillingSuppliers/>}/>
      </Routes>
    </div>
  );
}

export default App;
