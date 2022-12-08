import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {useSelector} from 'react-redux';
import axios from "axios";
import './Invite.css';
function Invite() {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [username4, setUsername4] = useState("");
  const [username5, setUsername5] = useState("");
  const [username6, setUsername6] = useState("");
  const [messageContent, setMessageContent] = useState();
  const [messageSubject, setMessageSubject] = useState();
  const [referral, setReferrals] = useState(0);
  const [joined, setJoined] = useState(0);
  const user = useSelector(state=>state.user.user);
  console.log(user);
  const getUsers = async() => {
    const usersData = await axios.get("http://localhost:8000/api/admLogin");
    let joinedUsers = 0;
    let InviteCode = `CEID${Math.floor(Math.random() * 1000000).toString(16).toUpperCase()}`;
    setMessageContent(`Hey, I've been using this tool for my business and I think you'll find it to be quite valuable as well!.

CineElite is enhancing the way this industry works.You can run your business end-to-end in an ecosystem full of your trusted peers.
    
CineElite is invite-only, therefore please utilise this link to submit the registration in full:
    
http://cineelite.com/register/${InviteCode}

See you on the inside :)
    
Cheers.
Fname`)
setReferrals(usersData.data.length);
usersData.data.map((e)=>{
  if(e.fname&&e.fname!="To be entered by the user"){
    joinedUsers = joinedUsers+1;
      }
    })
    setJoined(joinedUsers)
  };
  
  useEffect(()=>{
    getUsers();
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userArray = [username1, username2, username3, username4, username5, username6];
    let finalUserArray = userArray.filter(e=>e!='');
    setReferrals(referral+finalUserArray.length);
    var find = new RegExp("CEID"+'\\w*','gi');
    let currentInviteCode = messageContent.match(find);
    const userData = {
      refId: user._id,
      username: finalUserArray,
      invitecode: currentInviteCode[0],
      messageSub: messageSubject,
      messageCont: messageContent
    };
    console.log(userData);
    await axios.post("http://127.0.0.1:8000/api/admInvite", userData).then(e=>{
        switch(e.data){
      case 0: 
      window.alert("Invite Sent");
      break;
      case 1:
        window.alert("Invite already sent to user")
        break;
    }
  })
    e.target.reset();
  };
  return (
    <>
      <div className="mainInviteContainer">
      <div className="mainInviteContainerNavbar">
      <p className="mainInviteText">CineElite</p>
        </div>
      <div className="mainInviteContent">
      <div className="mainInviteDetailsContentContainer">
      <div className="mainInviteDetailsContent">
      <div className="mainInviteTextDetails">
        <p>Introduce your trusted associates to CineElite and help your network grow.</p>
        <p>Every successful referral rewards you with a gratis week extension to your exclusive membership - no limits!.</p>
        </div>
      <div className="mainInviteTextDetails">
      <div className="mainInviteTextDetailsContainer">
      <div className="mainInvitePic">
        </div>
      <div className="mainInviteSent">
      <div className="totalInviteSentContainer">
        <h3 className="totalInviteh3">{referral}</h3>
        <p>Invitations Sent</p>
        </div>
        </div>
      <div className="mainInviteSent">
      <div className="totalInviteSentContainer">
        <h3 className="totalInviteh3">{joined}</h3>
        <p>Successfully Joined</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="mainInviteEmailContentContainer">
        <div className="mainInviteEmailContent">
        <div className="mainEmailSubjectContent">
        <form onSubmit={handleSubmit} method="POST" action="/admInvite" className="mainEmailSubjectContentForm">
        <div className="mainEmailSubjectFormTexts">
          <h3>Message Subject:</h3>
          <input type="text" value={messageSubject} onChange={(e)=>{setMessageSubject(e.target.value)}} placeholder="Special invite from Fname Lname" className="InviteFormInputs"></input>
          <h3>Message Content:</h3>
          <textarea rows="15" type="text" value={messageContent} onChange={(e)=>{setMessageContent(e.target.value)}} className="InviteFormInputs"></textarea>
          </div>
          <div className="inviteFormButton">
        <input className="inviteFormButtonSubmit" type="submit" value="Send Invites"></input>
        </div>
          </form>
          </div>
          </div>
        <div className="mainInviteFormContainer">
        <div className="mainInviteForm">
          <h3 className="mainIviteFormText">Send Invitations to:</h3>
      <form className="mainInviteEmailForm" onSubmit={handleSubmit} method="POST" action="/admInvite">
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername1(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername2(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername3(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername4(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername5(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername6(e.target.value)}
          type="text"
          placeholder="Enter Email"
          name="username"
        ></input>
        {/* <input type="submit" value="Send Email"></input> */}
      </form>
      </div>
      </div>
      </div>
          </div>
      </div>
    </>
  );
}

export default Invite;
