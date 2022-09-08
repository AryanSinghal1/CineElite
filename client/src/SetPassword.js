import React, { useEffect, useState } from "react";
import axios from "axios";
function SetPassword(props) {
  const [password, SetPassword] = useState();
  const [rePassword, SetRePassword] = useState();
  const handlePassword = async (e) => {
    e.preventDefault();
    if (password === rePassword) {
      let passwordData = {
        email: props.email,
        password: password,
      };
      console.log(passwordData);
      await axios.post("http://127.0.0.1:8000/pass", passwordData);
    } else {
      window.alert("Passwords do not match");
    }
  };
  return (
    <>
      <form method="POST" action="/pass" onSubmit={handlePassword}>
        <input
          type="text"
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          placeholder="Enter password"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => {
            SetRePassword(e.target.value);
          }}
          placeholder="Re-Enter password"
          required
        ></input>
        <input type="submit" value="Set Password"></input>
      </form>
    </>
  );
}

export default SetPassword;
