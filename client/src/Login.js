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
  await axios.post("http://127.0.0.1:8000/userlogin", loginData)
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
