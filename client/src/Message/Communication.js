import React, { useEffect, useState } from 'react';
import {io} from "socket.io-client"
import {connect} from 'react-redux'
import axios from 'axios';
import ChatCard from './ChatCard';
function Communication() {
  const [socket, setSocket] = useState();
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [chats, setChats] = useState([]);
  const getUser = async () => {
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
  const getChats = async(req, res)=>{
    await axios.get("http://localhost:8000/chat").then((e)=>{setChats(e.data)}).catch(e=>console.log(e))
  }
  useEffect(()=>{
    let server = 'http://localhost:8000/';
    let socket = io(server, {
      cors: {
        credentials: true
      },
      transports: ['websocket']
    });
    setSocket(socket);
    socket.on("Output Chat Message", messageFromBackend=>{
      chats.concat(messageFromBackend);
    })
    getUser();
    getChats();
  },[])
  console.log(chats);
  const submitMessage = (e) =>{
    e.preventDefault();
    let userId = user._id;
    let userName = user.email;
    let time = new Date().getTime();
    let type = "text";
    let to = "632620f828187aac52a7ab81";
    socket.emit("Input Chat Message",{
      value,
      to,
      userId,
      userName,
      time,
      type
    })
    setValue("");
    getChats();
  }
    return (<>
    <h1>ChatPage</h1>
    {/* {chats.map(e => <p>{e.message}</p>)} */}
       {chats.map((chat)=>{
        return <ChatCard key={chat._id} chat={chat.message} from={chat.sender.email} name={chat.sender.fname} to={chat.to.email}/>
      })}
    <form onSubmit={submitMessage}>
      <input type='text' placeholder="Enter Message" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
      <input type='submit' value="Send" onClick={submitMessage}></input>
    </form>
    </>
  )
}
// const mapStateToProps = user => {
  //   return {
//     user: {
//       "fname": "Aryan",
//       "lname": "lname",
//       "password": "$2a$10$cdREnRh4M36laFCujPse4e42JqiWAZU663wloFWGYcrCVGDDwm5PG",
//       "registered": true,
//       "email": "Aryans81@gmail.com",
//       "mobile": "mob",
//       "address": "address",
//       "vatTaxNumber": "vatTax",
//       "introduction": "intro",
//       "opAddress": "hugyg",
//       "YearsExp": "5",
//       "links": [
//         {
//       "insta": "hugyg",
//       "media2": "hgkjhg",
//       "_id": {
//         "$oid": "632620f828187aac52a7ab82"
//       }
//     }
//   ],
//   "__v": 1,
//   "work": "work",
//   "bankDetails": [
//     {
  //       "AccNo": "Account Number",
//       "Bank": "Bank1",
//       "Branch": "Branch1",
//       "BranchAddress": "Branc1h Address",
//       "Swift": "Swi1ft"
//     }
//   ],
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI2MjBmODI4MTg3YWFjNTJhN2FiODEiLCJpYXQiOjE2NjQ3OTc0OTl9.YkSscvoZa8VSsXCR9JA4HtKTG9pXHFTjx8VySBW8_TA"
//     }
//   }
// }
export default Communication;