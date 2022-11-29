import React, { useEffect, useState } from "react";
import "./Overview.css";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import logo from "../Logo/logo.png";
import account from "../Logo/Folder_copy_fill.png";
import billing from "../Logo/Paper_fill.png";
import setting from '../Logo/Setting_alt_fill.png';
import Message from "../Logo/Message.png";
import Profile from "../Logo/Profile.png";
import Calendar from 'react-calendar';
import overview from "../Logo/Overview.png";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import Modal from "../Scheduling/CalendarModal";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
function Overview(props) {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [menu, setMenu] = useState(false);
  const [date, setDate] = useState(new Date());
  const [scheduledDates, setScheduledDates] = useState([]);
  const [referrals, setReferrals] = useState(0);
  const navigate = useNavigate();
  const currentUser = useSelector(state=>state.user.user);
  const getUser = async () => {
    if(!currentUser.fname){
      navigate("/nologin")
    }else if(currentUser.work=="work"){
      navigate("/up")
    }else{
      const thisCalendar = await axios.get("http://127.0.0.1:8000/api/getCalendar");
    setReferrals(thisCalendar.data.length);
    thisCalendar.data.map((e)=>{
      scheduledDates.push(e.date1)
    })
    setCalendarEvents(thisCalendar.data);
    }
  };
  getUser();
  menu?document.body.style.overflow = "hidden":document.body.style.overflow = "scroll";
  const handleMenu = ()=>{
    setMenu(!menu);
  }
  let actionClassname = "actionControls";
  let actionActivity = "Action Needed";
  const getActions = async(e)=>{
    const userBankDetails = currentUser?.bankDetails[0];
    const accountDetails = {
      _id: userBankDetails._id,
      AccNo:"Account Number",
      Bank:"Bank",
      Branch:"Branch",
      BranchAddress:"Branch Address",
      Swift:"Swift"
    }
    if(JSON.stringify(accountDetails)===JSON.stringify(userBankDetails)){
      actionActivity = "Account Updated";
      actionClassname = "actionControls needAction";
    }
  }
  getActions();
  return (
    <div className="mainDashboard">
      <div className="dashboardInfo">
        <p className="infoText">CineElite</p>
      </div>
            {menu && <div className="menuContainer" onClick={(e)=>setMenu(false)}><div className="menu">
              <div className="inviteMenu">
                <div className="inviteIcon">
                  <img
                    className="menuIconImages"
                    src={Profile}
                    alt="Profile"
                  ></img>
                </div>
                <div className="MenuMainContainer">
                  <div className="MenuMain MenuLeft">
                    <div className="MainMenuItems">
                        
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
</svg>

                      <Link className="menulinks" to="/admInvite" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Invite Others</p></Link>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                      <img
                    className="w-7 h-7"
                    src={setting}
                    alt="Profile"
                  ></img>
                  
                  <Link className="menulinks" to="/admInvite" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Tools</p></Link>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
</svg>

                      <Link className="menulinks" to="/" onClick={()=>{document.body.style.overflow = "scroll"}}><p>How To</p></Link>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
</svg>


                      <Link className="w-150 text-sm" to="/" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Contact</p></Link>
                      </div>
                    </div>
                    </div>
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
</svg>

                      <Link className="menulinks" to="/" onClick={()=>{document.body.style.overflow = "scroll"}}><p>About CineElite</p></Link>
                      </div>
                      </div>
                    </div>
                    
                </div>
              </div>
              <div className="overviewMenu">
                <div className="inviteIcon">
                  <img
                    className="menuIconImages rect"
                    src={Message}
                    alt="Message"
                  ></img>
                </div>
                <div className="MenuMainContainer">
                  <div className="MenuMain right">
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                        <img
                          className="menuOptionIcons"
                          src={overview}
                          alt="Message"
                        ></img>
                        <Link className="menulinks" to="/overview"><p>Overview</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
</svg>

                      

                      <Link className="menulinks" to="/equipments" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Equipments</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
</svg>

                        <p>Services</p>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>


                        <Link className="menulinks" to="/scheduling" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Scheduling</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <img
                    className="w-7 h-7"
                    src={billing}
                    alt="Profile"
                  ></img>
                      <Link className="menulinks" to="/billing" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Billing</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <img
                    className=" w-7 h-7"
                    src={account}
                    alt="Profile"
                  ></img>
                  <Link className="menulinks" to="/profile" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Account</p></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>}
      <div className="dashboardContentContainer">
        <div className="dashboardContent">
          <div className="businessOverview">
            <img className="businessLogo" src={logo} onClick={(e)=>setMenu(true)} alt="CineElite"></img>
            <p className="overViewHeading">{currentUser.fname}'s Business Overview</p>
            <p className="overViewPara">Saturday, 3 September 2022</p>
          </div>
          <div className="businessActions">
            <div className="actionControls">
              <div className="actionControlsCont">
                <p className="actions">Notifications</p>
                <p>2 unread threads</p>
                <div className="actionCount">2</div>
              </div>
            </div>
            <div className="actionControls">
            <Link to='/documentsUser' className="profileLink">
              <div className="actionControlsCont">
                <p className="actions">Open Documents</p>
                <p>1 Quote, 1 Invoice</p>
                <div className="actionCount">3</div>
              </div>
              </Link>
            </div>
            <div className={actionClassname}>
              <div className="actionControlsCont">
                <p>Account Status</p>
                <p className="actions">{actionActivity}</p>
                <p>CEID00001</p>
              </div>
            </div>
            <div className="actionControls">
            <Link to='/profile' className="profileLink"><div className="actionControlsCont">
                <p className="actions">Profile</p>
                <p>5 views / week 8 referrals</p>
                <p>80% complete</p>
              </div></Link>
            </div>
          </div>
          <Modal/>
          <div className="businessCalendar">
            <div className="calendarContainer">
            {/* <FullCalendar className="CalendarFull"
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      /> */}
      <Calendar onChange={setDate} 
      // tileClassName={scheduledDates.map((e)=>{
      //   (date, view)=>{view==='month'&&date.toLocaleDateString()===e.date1?return 'thisSelected':''}
      // })}
      tileClassName={({ date, view }) => {
        if(scheduledDates.find(x=>x===date.toLocaleDateString())){
          console.log("Yessserstyyxd")
         return  'highlight'
        }
      }}
      className="calendarFull" value={date} minDate={new Date()}></Calendar>
            </div>
            <div className="businessUpcoming">
              <p>Upcoming Activities</p>
              <ul>
              {calendarEvents.map((e)=>{
                return <li className="eventsList">{e.title}<br></br>{e.date1}-{e.date2}<br></br>{e.time1}-{e.time2}</li>
              })}
                {/* <li>{calendarEvents[0]}</li> */}
                {/* <li>{calendarEvents[0].date1}-{calendarEvents[0].date2}{calendarEvents[0].title}{calendarEvents[0].time1}-{calendarEvents[0].time2}</li> */}
              </ul>
            </div>
          </div>
          <div className="businessDetails">
            <div className="businessMyInvites"></div>
            <div className="businessMykit">
              <div className="businessMykitText">
                <p>My Kit</p>
              </div>
              <div className="businessMykitDetails">
                <div className="businessMykitContent">
                  <p className="businesskitHeadings">Total Units</p>
                  <p>24</p>
                </div>
                <div className="businessMykitContent">
                  <p className="businesskitHeadings">In Use Now</p>
                  <p>7</p>
                </div>
                <div className="businessMykitContent">
                  <p className="businesskitHeadings">Selling</p>
                  <p>2</p>
                </div>
                <div className="businessMykitContent">
                  <p className="businesskitHeadings">Watchlist</p>
                  <p>6</p>
                </div>
              </div>
            </div>
            <div className="businessMyInvites">
              <div className="businessMyInviteText">
                <p>You have invited {referrals}</p>
                <p>industry professionals.</p>
              </div>
              <div className="businessMyInviteAction">
                <button className="businessInviteActionButton">
                  Invite More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
