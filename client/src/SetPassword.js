import React, { useEffect, useState } from 'react'
import axios from 'axios'
function SetPassword() {
  const [email, setEmail] = useState()
  const [password, SetPassword] = useState()
  const [rePassword, SetRePassword] = useState()
  const handlePassword = async(e) =>{
    e.preventDefault()
    if(password===rePassword){
        let passwordData = {
            email: email,
            password: password
        }
        console.log(passwordData)
        await axios.post('/pass', passwordData)
    }else{
        window.alert("Passwords do not match")
    }
  }
  return (<>
  <form method='POST' action='/pass' onSubmit={handlePassword}>
    <input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" required></input>
    <input type='text' onChange={(e)=>{SetPassword(e.target.value)}} placeholder="Enter password" required></input>
    <input type='text' onChange={(e)=>{SetRePassword(e.target.value)}} placeholder="Re-Enter password" required></input>
    <input type='submit' value='Set Password'></input>
  </form>
    </>
  )
}

export default SetPassword