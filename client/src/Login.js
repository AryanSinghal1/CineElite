import React, { useState } from 'react'
import axios from 'axios'
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleLogin = async () =>{
        let loginData = {
            email: email,
            password: password
        }
        console.log(loginData)
        await axios.post('/userlogin', loginData)
    }
  return (<>
    <div>Login</div>
    <form method='POST' action='/'>
        <input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' required></input>
        <input type='text' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' required></input>
        <button  onClick={handleLogin}>Login</button>
    </form>
    </>
  )
}

export default Login