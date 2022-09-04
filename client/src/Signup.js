import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [address, setAddress] = useState()
  const [VAT, setVAT] = useState()
  const [intro, setIntro] = useState()
  const [invite, setInvite] = useState()
  const handleSubmit = async()=>{
    const data = {
      name:name,
      email:email,
      mobile:mobile,
      address:address,
      VAT:VAT,
      intro:intro,
      invite:invite
    }
    await axios.post('/login', data)
  }
  return (<>
    <div>Signup</div>
    <form action='/login' method='POST' onSubmit={handleSubmit}>
        <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter Name' required></input>
        <input onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Enter Email Address' required></input>
        <input onChange={(e)=>{setMobile(e.target.value)}} type='number' placeholder='Enter Mobile Number' required></input>
        <input onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder='Enter Address' required></input>
        <input onChange={(e)=>{setVAT(e.target.value)}} type='number' placeholder='Enter VAT/Tax Number' required></input>
        <input onChange={(e)=>{setIntro(e.target.value)}} type='text' placeholder='Introduction'></input>
        <input onChange={(e)=>{setInvite(e.target.value)}} type='text' placeholder='Enter Invite Code' maxLength='6' required ></input>
        <input onChange={(e)=>{}} type='file' placeholder='Upload VAT Document'></input>
        <input onChange={(e)=>{}} type='file' placeholder='Upload Photo'></input>
        <input onChange={(e)=>{setAddress(e.target.value)}} type='submit' value='Submit'></input>
    </form>
    </>
  )
}

export default Signup