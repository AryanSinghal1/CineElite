import React, { useEffect, useState } from 'react';
import {io} from "socket.io-client"
import {connect, useSelector} from 'react-redux'
import axios from 'axios';
import ChatCard from './ChatCard';
import { useNavigate, useParams } from 'react-router-dom';
function Communication() {
  const [useSocket, setSocket] = useState();
  const [activeUser, setActiveUser] = useState({});
  const [chatUsers, setChatUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentChatUsers, setCurrentChatUsers] = useState([]);
  const [value, setValue] = useState("");
  const [chats, setChats] = useState([]);
  const [selected, setSelected] = useState({});
  const searchParams = useParams();

  const navigate = useNavigate();
  const user = useSelector(state=>state.user.user);
  // if(searchParams.id==user.email){
  //   navigate('/nologin')
  // }
  const getCurrentUser = async(req, res)=>{
    const currentUserData = await axios.get("http://localhost:8000/api/admLogin")
    const activeCurrentUser = currentUserData.data.filter(x=>{return x.email==searchParams.id});
      setAllUsers(currentUserData);
      return activeCurrentUser[0];
    }
  const getChats = async(req, res)=>{
    const currUser = await getCurrentUser();
    if(currUser)setActiveUser(currUser)
    await axios.get("http://localhost:8000/chat").then(async(e)=>{
      // const currentUserChats = e.data.filter((user)=>{return user.to._id==activeUser._id})
      const currentUserChats = currUser?e.data.filter((chat)=>{return chat.to.email==currUser.email&&chat.sender.email==user.email||chat.sender.email==currUser.email&&chat.to.email==user.email}):{};
      setChats(currentUserChats);
    const achatUsers = [];
    const senderData = e.data.filter(x=>x.sender._id==user._id);
  senderData.map((ch)=>{
    achatUsers.push(ch.to);
  })
  if(currUser)achatUsers.push(currUser);
  const finalChatUsers = achatUsers.reduce((map, elem)=>map.set(elem._id, elem), new Map()).values();
  const finalChatUserArray = Array.from(finalChatUsers);
  const ffinalChatUserArray = finalChatUserArray.filter(x=>x.email!=user.email)
  console.log(finalChatUsers);
  setChatUsers(ffinalChatUserArray);
    }).catch(e=>console.log(e))
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
    // getCurrentUser();
    // getUser();
    getChats();
  },[searchParams.id])
  const submitMessage = async(e) =>{
    e.preventDefault();
    let userId = user._id;
    let userName = user.email;
    let time = new Date().getTime();
    let type = "text";
    let to = activeUser._id;
    useSocket.emit("Input Chat Message",{
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
  // console.log(selected.map(e=>console.log(e)));
    return (<div className='h-screen w-screen flex'>
      <div className='h-screen w-1/5 flex-col'>
        <div className='w-1/1 h-1/6 flex justify-center items-center'><p className='font-bold text-5xl'>Chats</p></div>
        <div className='w-1/1 h-5/6 flex-col'>
          {chatUsers.map((e)=>{return(
          <div className='w-full h-1/6 flex justify-around items-center'>
            <input type="radio" id={e._id} name="user" value={e} onClick={(chose)=>{
              navigate(`/messages/${e.email}`)
              getChats();
              }} className="hidden peer"></input>
            <label htmlFor={e._id} className="flex justify-around h-5/6 items-center rounded border cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
          <div className='w-1/6 h-12 flex '>
            <img src={e.profImage} className='w-full h-full'></img>
          </div>
          <div className='h-12 w-4/6 flex-col'>
            <p className='text-sm'>{e.fname} {e.lname}</p>
            <p className='text-xs'>{e.email}</p>
          </div>
          </label>
          </div>)
        })}
        </div>
      </div>
      <div className='h-screen w-4/5 flex-col'>
       <div className='w-full h-5/6 flex-col'>
       <div className='w-full h-1/6 flex justify-start items-center'>
       <div className='w-2/6 h-5/6 flex justify-start items-center'>
        <div className='w-16 h-16 bg-black rounded-full overflow-hidden'>
          <img src={activeUser.profImage} className='h-full w-full '></img>
        </div>
        <div className='w-5/6 h-full flex justify-start items-center'>
          <p className='mx-5 text-xl'>{activeUser.fname} {activeUser.lname} {activeUser.email}</p>
        </div>
         </div>
         </div>
       <div className='w-full h-5/6 flex-col'>
        {chats.length?chats.map((chat)=>{
          console.log(chat);
          return <ChatCard key={chat._id} activeUser={activeUser} chat={chat.message} name={user}
         to={chat.to}/>
       }):''}
      </div>
      </div>
    <form onSubmit={submitMessage} className='w-full h-1/6 flex items-center'>
      <input type='text' className='w-5/6 h-1/2 border' placeholder="Enter Message" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
      <input type='submit' className='w-1/6 h-1/2 text-white text-xl bg-black rounded' value="Send" onClick={submitMessage}></input>
    </form>
    </div>
    </div>
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