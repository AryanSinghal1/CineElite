import React, { useState } from "react"
import './TempPass.css'
function TempPass(){
    const [email, setEmail]= useState()
    const [temp, settemp] = useState()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data ={
            email: email,
            temp: temp
        }
    }
    return(<>
    <div className='temppassmain'>
          <div className='info'>
           </div> 
      

      </div>
    </>)
}

export default TempPass