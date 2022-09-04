import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SignupUserCard from './SignupUserCard'

const SignupUsers = () =>{
  const [data, setData] = useState()
  const getData = async() =>{
    let data = await axios.get('/admlogin')
    const unregisteredData = data.data.filter((e)=>{return e.registered==false})
    setData(unregisteredData)
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div>
      {data?data.map(e=> <SignupUserCard name={e.name} email={e.email} mobile={e.mobile} address={e.address} VAT={e.vatTaxNumber} intro={e.introduction}/>):''}
    </div>
  )
}

export default SignupUsers