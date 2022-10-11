import React, { useEffect, useState } from 'react'

function ChatCard(props) {
    const [user, setUser] = useState({});
    const getUser = async() =>{
    const thisdata = await fetch("api/getUser", {
        method:"GET",
        headers:{
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials: 'include',
      })
      const getData = await thisdata.json();
      if(!getData.fname){
        // navigate("/nologin")
      }
        else{
        setUser(getData)
        }
    }
    useEffect(()=>{
        getUser()
    },[]);
    console.log(user);
  return (
    <div style={{height: "100px", width: "100%", backgroundColor: props.to==user.email? 'green':"red"}}>
    {/* <h1>Hello</h1> */}
    <p>{props.name}</p>
    <p>{props.chat}</p>
    <p>{props.to}</p>
    </div>
  )
}

export default ChatCard