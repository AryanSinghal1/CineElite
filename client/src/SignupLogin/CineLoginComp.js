import React, { useEffect, useState } from 'react'
import './cineLoginComp.css'
import logo1 from "../Logo/logo1.png";
import logo2 from "../Logo/logo2.png";
import logo from "../Logo/logo.png";
import { useSelector } from 'react-redux';
import axios from 'axios';
import useSelection from 'antd/lib/table/hooks/useSelection';

function CineLoginComp() {
  const user = useSelector(state=>state.user.currInviteUser);
  const [getUsers,setUsers] = useState([]);
  const getData = async()=>{
    const currUser = await axios.get("http://localhost:8000/api/admLogin");
    console.log(currUser);
    setUsers(currUser.data);
  }
  const currUser = getUsers.filter(e=>e._id==user.refBy);
  useEffect(()=>{
        getData();
      },[])
  const role = user.role==0?"Freelancer":user.role==1?'SME':'Manufacturer';
  return (
    <div className="info">
          <img src={logo1} className="logo1" alt="logo1"></img>
          <img src={logo2} className="logo2" alt="logo2"></img>
          <img src={logo} className="logo" alt="logo"></img>
          <div className="company">
            <p>Cine Elite</p>
          </div>
          <div className='w-full h-1/4 flex justify-center items-center absolute top-[60%]'>
            <div className='h-full w-[90%] flex flex-col justify-between items-center'>
              <div className='h-2/3 w-full'>
                <p className='text-white'>Registering as a <span className='text-yellow-300'>{role}</span> </p>
                <p className='text-white'>Email: <span className='text-yellow-300'>{user?.email}</span></p>
                <p className='text-blue-400'>Change this</p>
              </div>
              <div className='h-[40%] w-full'>
                <p className='text-white'>Referred By:</p>
                <div className='flex w-full h-[90%] justify-between items-center'>
                  <img src={currUser[0]?.profImage} className='w-8 h-8 rounded-full'></img>
                  <div className="h-full w-[90%] flex items-center">
                  <p className='text-yellow-300 text-xl'>{currUser[0]?.fname}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CineLoginComp