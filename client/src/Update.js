import React, { useState } from 'react'
import './Update.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Update() {
  const [acc, setAcc] = useState();
  const [swift, setSwift] = useState();
  const [bank, setBank] = useState();
  const [branch, setBranch] = useState();
  const [opAddress, setOpAddress] = useState();
  const [insta, setInsta] = useState();
  const [media, setMedia] = useState();
  const [years, setYears] = useState();
  const [work, setWork] = useState();
  const navigate = useNavigate();

  const handleUpdate = async(e)=>{
    e.preventDefault();
    const data = {
      insta: insta,
      media2: media,
      AccNo: acc,
      Swift: swift,
      Bank: bank,
      Branch: branch,
      BranchAddress: branch,
      work: work,
      opAddress: opAddress,
      years: years
    };
    console.log(data)
  await axios.post("http://127.0.0.1:8000/api/update",data).then(e=>{switch (e.data) {
    case 0:
      console.log('Done')
      navigate("/dashboard");
      break;
    case 1:
      console.log("invalid code")
      break;
      case 2:
        break;
  };console.log(e.data)}).catch(e=>console.log(e));
  }
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" onChange={(e)=>{setAcc(e.target.value)}} name='AccNo' placeholder='Enter Account number'></input>
        <input type="text" onChange={(e)=>{setSwift(e.target.value)}} name='Swift' placeholder='Enter Swift details'></input>
        <input type="text" onChange={(e)=>{setBank(e.target.value)}} name='Bank' placeholder='Enter Bank Name'></input>
        <input type="text" onChange={(e)=>{setBranch(e.target.value)}} name='Branch' placeholder='Enter Branch Address'></input>
        <input type="text" onChange={(e)=>{setOpAddress(e.target.value)}} name='opAdress' placeholder='Enter Operations Address'></input>
        <input type="text" onChange={(e)=>{setInsta(e.target.value)}} name='insta' placeholder='Enter insta link'></input>
        <input type="text" onChange={(e)=>{setMedia(e.target.value)}} name='media2' placeholder='Enter media link'></input>
        <input type="number" onChange={(e)=>{setYears(e.target.value)}} name='yearsExp' placeholder='Enter Years of Experience'></input>
        <input type="text" onChange={(e)=>{setWork(e.target.value)}} name='work' placeholder='Enter Work'></input>
        <input type="submit" value="Update Info"></input>
      </form>
    </div>
  )
}

export default Update