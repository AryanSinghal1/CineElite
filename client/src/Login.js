import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    let loginData = {
      email: email,
      password: password,
    };
  await axios.post("http://127.0.0.1:8000/api/userlogin", loginData).then(e=>
  {switch(e.data){
    case 0:
      window.alert("Success");
      break;
    case 1:
      window.alert("Wrong Password");
      break;
    case 2:
      window.alert("User not found");
      break;
  }})
  };
  return (
    <>
      <div>Login</div>
      <form method="POST" action="/" onSubmit={handleLogin}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
          required
        ></input>
        <input type="submit" value="login"></input>
      </form>
    </>
  );
}

export default Login;
