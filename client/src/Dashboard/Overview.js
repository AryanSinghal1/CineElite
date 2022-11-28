import React, { useEffect, useState } from "react";
import "./Overview.css";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import logo from "../Logo/logo.png";
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
  const [menu, setMenu] = useState(true);
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
            {menu && <div className="menuContainer"><div className="menu">
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
                        <p>Equipment</p>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                        <p>Equipment</p>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                        <p>Equipment</p>
                      </div>
                    </div>
                    
                    <div className="menuOptionsContainer rightMenu">
                      <div className="menuOptions">
                        <p>Equipment</p>
                      </div>
                    </div>
                    </div>
                    <div className="MainMenuAbout">
                        <p>About CineElite</p>
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
                        <Link className="menulinks" to="/overview"><p onClick={(e)=>setMenu(false)}>Overview</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <Link className="menulinks" to="/equipments" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Equipments</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                        <p>Services</p>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                        <Link className="menulinks" to="/scheduling" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Scheduling</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                      <Link className="menulinks" to="/billing" onClick={()=>{document.body.style.overflow = "scroll"}}><p>Billing</p></Link>
                      </div>
                    </div>
                    <div className="menuOptionsContainer">
                      <div className="menuOptions">
                        <p>Account</p>
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
            <img className="businessLogo" src={logo} onClick={handleMenu} alt="CineElite"></img>
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
