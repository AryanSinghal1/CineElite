import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from './Home'
import Signup from "./Signup";
import SignupUsers from "./SignupUsers";
import SetPassword from "./SetPassword";
import Login from "./Login";
import TempPass from "./TempPass"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signup/>}/>
        <Route path='/admlogin' element={ <SignupUsers/>}/>
        <Route path='/pass' element={<SetPassword/>}/>
        <Route path='/userlogin' element={<Login/>}/>
        <Route path='/temppass' element={<TempPass/>}/>
      </Routes>
    </div>
  );
}

export default App;
