import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import './Home.css';
function Home() {
  const [username, setUsername] = useState();
  // const [code, setCode] = useState()
  const generateCode = () => {
    // let newCode = Math.floor(Math.random() * 899999) + 100000
    // setCode(newCode)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      invitecode: Math.floor(Math.random() * 899999) + 100000,
    };
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
        <h3 className="totalInviteh3">32</h3>
        <p>Invitations Sent</p>
        </div>
        </div>
      <div className="mainInviteSent">
      <div className="totalInviteSentContainer">
        <h3 className="totalInviteh3">28</h3>
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
          <input type="text" placeholder="Special invite from Fname Lname" className="InviteFormInputs"></input>
          <h3>Message Content:</h3>
          <textarea rows="15" type="text" placeholder="Hey, I've been using this tool for my business and I think you'll find it to be quite valuable as well!

CineElite is enhancing the way this industry works.You can run your business end-to-end in an
ecosystem full of your trusted peers.

CineElite is invite-only, therefore please utilise this link to submit the registration in full:

http://cineelite.com/register/CEID00001

See you on the inside :)

Cheers.
Fname" className="InviteFormInputs"></textarea>
          </div>
          <div className="inviteFormButton">
        <input className="inviteFormButtonSubmit" type="submit" value="Send 6 Invites"></input>
        </div>
          </form>
          </div>
          </div>
        <div className="mainInviteFormContainer">
        <div className="mainInviteForm">
          <h3>Send Invitations to:</h3>
      <form className="mainInviteEmailForm" onSubmit={handleSubmit} method="POST" action="/admInvite">
        <input
        className="InviteFormInputs"
          onChange={(e) => setUsername(e.target.value)}
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

export default Home;
