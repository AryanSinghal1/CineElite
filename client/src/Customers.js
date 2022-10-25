import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Customers() {
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const getUser = async () => {
        const thisdata = await fetch("api/admLogin", {
          method:"GET",
          headers:{
            Accept : "application/json",
            "Content-Type" : "application/json"
          },
          credentials: 'include',
        })
        const getData = await thisdata.json();
          setUser(getData)
        }
    useEffect(()=>{
        getUser();
    },[])
    const handleContact = (e) => {
      navigate(`/messages/${e.email}`);
      console.log(e);
    }
    console.log(user);
  return (
    user.map((e)=>{
      return <div><p>{e.email}</p><button className='border' onClick={()=>{handleContact(e)}}>Send Message</button></div>
    })
    // <p>Gelo</p>
    // {user.map}
  )
}

export default Customers