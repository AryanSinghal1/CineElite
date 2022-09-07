import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'
import logo1 from './Logo/logo1.png'
import logo2 from './Logo/logo2.png'
import logo from './Logo/logo.png'
import uploadLogo from './Logo/Upload.png'
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [address, setAddress] = useState()
  const [VAT, setVAT] = useState()
  const [intro, setIntro] = useState()
  const [invite, setInvite] = useState()
  const handleSubmit = async(e)=>{
    e.preventDefault()
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
  <div className='signupMain'>
      <div className='info'>
        <img src={logo1} className='logo1' alt='logo1'></img>
        <img src={logo2} className='logo2' alt='logo2'></img>
        <img src={logo} className='logo' alt='logo'></img>
        <div className='company'>
          <p>Cine Elite</p>
        </div>
      </div>
  <div className='signupDetailsContainer'>
    <div className='signupDetails'>
      <div className='signupText'>
        <p><span className='sign'>Sign</span> up</p>
      </div>
      <div className='signupForm'>

    <form action='/login' method='POST' onSubmit={handleSubmit} className='signupForm'>
      <div className='referral'>
        <p>Referral Code</p>
        <input className='signupInput refInput' onChange={(e)=>{setInvite(e.target.value)}} type='text' placeholder='Enter Invite Code' maxLength='6' required ></input>
        </div>
        <div className='signupFormDetails'>
          <div className='inputFields'>
            <p>First Name</p>
        <input className='signupInput' onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter First Name' required></input>
          </div>
          <div className='inputFields'>
            <p>Last Name</p>
        <input className='signupInput' onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter Last Name' required></input>
          </div>
          <div className='inputFields'>
            <p>Email</p>
        <input className='signupInput' onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Enter Email Address' required></input>
          </div>
          <div className='inputFields'>
            <p>Contact Number</p>
        <input className='signupInput' onChange={(e)=>{setMobile(e.target.value)}} type='number' placeholder='Enter Mobile Number' required></input>
          </div>
          <div className='inputFields'>
            <p>Billing Address</p>
        <input className='signupInput' onChange={(e)=>{setAddress(e.target.value)}} type='text' placeholder='Enter Address' required></input>
          </div>
          <div className='inputFields'>
            <p>VAT/TAX Number</p>
        <input className='signupInput' onChange={(e)=>{setVAT(e.target.value)}} type='number' placeholder='Enter VAT/Tax Number' required></input>
          </div>
          <div className='inputFields introField'>
            <p>My Intro</p>
        <input className='signupInput introInput' onChange={(e)=>{setIntro(e.target.value)}} type='text' placeholder='Introduction'></input>
          </div>
      </div>
          <div className='uploadFields'>
            <div className='uploadText'>
            <p>Upload</p>
            </div>
            <div className='documentUpload'>
            <div className='imagesUpload'>
        <input id='vat' classname="document" onChange={(e)=>{}} accept="image/*" type='file'></input>
        <label className='uploadDocuments' for='vat'>
          Upload VAT Document &nbsp;
          <img src={uploadLogo} alt="upload"></img>
          </label>
          </div>
            <div className='imagesUpload'>
        <input id='photo' classname="document" onChange={(e)=>{}} accept="image/*" type='file'></input>
        <label className='uploadDocuments' for='photo'>Upload Photo
          <img src={uploadLogo} alt="upload"></img>
        </label>
          </div>
          </div>
          </div>
          <div className='signupSubmit'>
        <input className='signupButton' type='submit' value='Sign up'></input>
          </div>
      </form>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup