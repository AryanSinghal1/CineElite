import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    let loginData = {
      email: email,
      password: password,
    };
    await fetch("/api/userlogin",{
      method  :"POST",
      headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email, password
      }),
      credentials : 'include'
  }).then(async(e)=>{
    const thisdata = await e.json();
    console.log(thisdata.Message);
    if(thisdata.Message=="Welcome"){
       navigate('/overview');
    }else{
          setError(true);
    }
  })
  // await axios.post("http://127.0.0.1:8000", loginData ).then(e=>{
  //   {switch(e.data){
  //   case 0:
  //     window.alert("Success");
  //     break;
  //   case 1:
  //     break;
  //   case 2:
  //     break;
  // }};console.log(e.data.Message);
  // }
  // )
  };
  return (
    <div className="loginMain">
    <div className="loginForm">
    <div className="loginFormContainer">
    <div className="loginText">
                <p>
                  <span className="temp">Log</span> In
                </p>
        </div>
    <div className="loginDetails">
      <form className="setLoginForm" method="POST" action="/" onSubmit={handleLogin}>
      <div className="setLoginFields">
      <p>Enter E-mail</p>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
          required
          className="loginInput"
          ></input>
          </div>
            <div className="setLoginFields">
          <p>Enter Password</p>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
          required
          className="loginInput"
        ></input>
          </div>
        <input className="setLoginSubmit" type="submit" value="login"></input>
        {error&&<p className="errorLogin">Invalid Credentials</p>}
      </form>
      </div>
      </div>
      </div>
      <div className="formBg"></div>
      </div>
  );
}

export default Login;
