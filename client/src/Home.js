import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import axios from 'axios'
function Home() {
    const [username, setUsername] = useState()
    const [code, setCode] = useState()
    const generateCode = () =>{
      let newCode = Math.floor(Math.random() * 899999) + 100000 
      setCode(newCode)
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        emailjs.sendForm('service_zj8k5nm', 'template_hb84ehp', e.target, 'zzIk1iqeJsRHrp6hj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        let data = {
          username: username,
          invitecode: code
        }
        console.log(data)
        await axios.post('/', data)
    }
  return (<>
    <div>Enter email</div>
    <form onSubmit={handleSubmit} method='POST' action='/'>
        <input onChange={e=>setUsername(e.target.value)}
         type='text' placeholder='Enter Email' name='username'></input>
        <button type='button' onClick={()=>generateCode()}>Generate Code</button>
        <input 
         type='text' placeholder='Enter Email' name="invitecode"
         value={code}
         ></input>
        <input type='submit' value='Send Email'></input>
    </form>
    </>
  )
}

export default Home