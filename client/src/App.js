import React, { useEffect } from "react";
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
import WeekScheduling from "./Scheduling/WeekScheduling";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from "./Slices/Slices";
import { LandingPage } from "./Equipments/LandingPage";
import { Products } from "./Equipments/Product";
import { Kit } from "./Equipments/Kit";
import { Watchlist } from "./Equipments/watchlist";
import { ProductDetails } from "./Equipments/ProductDetails";
import { History } from "./Equipments/History";
import { Compare } from "./Equipments/Compare";
import SignupFreelancer from "./SignupLogin/Signup/SignupFreelancer";
import SignupManufacturer from "./SignupLogin/Signup/SignupManufacturer";
import SignupSME from "./SignupLogin/Signup/SignupSME";
function App() {
  const dispatch = useDispatch();
  const getData = async()=>{
    await fetch("http://localhost:3000/api/authenticate",{
      method  :"GET",
      headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
      },
      credentials : 'include'
  }).then(async(e)=>{
    const data = await e.json();
        dispatch(loginUser(data));
    }).catch(e=>console.log(e));
  }
  useEffect(()=>{
    getData();
  },[]);
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
        <Route exact path="/wscheduling" element={<WeekScheduling />}/>
        <Route exact path="/register" element={<Signup />}/>
        <Route exact path="/equipments" element={<LandingPage/>}/>
        <Route exact path="/explore" element={<Products/>}/>
        <Route exact path="/kit" element={<Kit/>}/>
        <Route exact path="/watchlist" element={<Watchlist/>}/>
        <Route exact path="/history" element={<History/>}/>
        <Route exact path="/packages" element={<Products/>}/>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route exact path="/compare" element={<Compare/>}/>
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
