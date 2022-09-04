import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import axios from 'axios'
function Home() {
    const [username, setUsername] = useState()
    // const [code, setCode] = useState()
    const generateCode = () =>{
      // let newCode = Math.floor(Math.random() * 899999) + 100000 
      // setCode(newCode)
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        let data = {
          username: username,
          invitecode: Math.floor(Math.random() * 899999) + 100000
        }
        console.log(data)
        await axios.post('/',data)
        e.target.reset()
        // setCode()
    }
  return (<>
    <div>Enter email</div>
    <form onSubmit={handleSubmit} method='POST' action='/'>
        <input onChange={e=>setUsername(e.target.value)}
         type='text' placeholder='Enter Email' name='username'></input>
        <input type='submit' value='Send Email'></input>
    </form>
    </>
  )
}

export default Home