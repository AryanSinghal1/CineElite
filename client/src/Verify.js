import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SetPassword from './SetPassword';

function Verify() {
    const [verified, setVerified] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const verifyit = async(e)=>{
        const verifyData = await axios.get("http://localhost:8000/verify");
        const getVerifyData = verifyData.data;
        const data = getVerifyData.filter((e)=>{return e.name==email&&e.registered})
        if(data[0].password==password){
            setVerified(true)
        }
    }
  return (<>
  {verified?<SetPassword email={email}/>
    :<><div>Verify</div>
    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"></input>
    <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"></input>
    <button onClick={verifyit}>Proceed</button></>
    }
    </>
  )
}

export default Verify