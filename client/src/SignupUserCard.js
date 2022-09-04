import axios from 'axios'
import React from 'react'

function SignupUserCard(props) {
  const verified = async()=>{
    let userData = {
      email:props.email,
    }
    await axios.post('/admverify', userData)
  }
  return (
    <>
    <p>{props.name}</p>
    <p>{props.email}</p>
    <p>{props.mobile}</p>
    <p>{props.address}</p>
    <p>{props.VAT}</p>
    <p>{props.intro}</p>
    <button onClick={verified}>Verify It</button>
    </>
  )
}

export default SignupUserCard