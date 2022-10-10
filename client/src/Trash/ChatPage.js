import axios from 'axios'
import React, { useEffect, useState } from 'react'
function ChatPage() {
    const [chats, setChats] = useState([]);
    const fetchChats = async() =>{
        const chatData = await axios.get('/api/chat');
        setChats(chatData.data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (<>
    <div>ChatPage</div>
    {chats.map(e=><div>{e.chatName}</div>)}
    </>
  )
}

export default ChatPage