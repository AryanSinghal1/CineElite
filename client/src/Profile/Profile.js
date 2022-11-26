import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../Logo/icon1.png';
import icon2 from '../Logo/icon2.png';
import icon3 from '../Logo/icon3.png';
import icon4 from '../Logo/icon4.png';
import icon5 from '../Logo/icon5.png';
import icon6 from '../Logo/icon6.png';
import icon7 from '../Logo/icon7.png';
import './Profile.css'
import "react-toggle/style.css";
import Toggle from 'react-toggle'
import axios from 'axios';
import { useSelector } from 'react-redux';
function Profile() {
    const navigate = useNavigate();
    const [referralData, setReferralData] = useState([]);
    const getUsers = async(req, res)=>{
      const allData = await axios.get("http://localhost:8000/api/admLogin");
      setReferralData(allData.data);
    }
    const user = useSelector(state=>state.user.user);
    if(!user.fname){
      navigate('/nologin');
    }
    useEffect(()=>{
        getUsers();
    },[]);
    
    return (
        <div className='profileMain'><div className="ProfileDashboardInfo">
    <p className="ProfileInfoText">CineElite</p>
  </div>
  <div className='profileAboutContainer'>
  <div className='profileAbout'>
    <div className='profileImage'>
        <div className='profImageContainer'>
            <img className='profImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcBk5v06sc_1-gOFMn9oc2R2rs62Ir9VSyQm4gzqN&s"></img>
        </div>
        <div className='profileView'>
            <p>{user.fname} {user.lname}</p>
            <Link to="/userprofile"><button className='profileViewButton'>My Profile</button></Link>
        </div>
    </div>
    <div className='ProfilePersonal'>
    <div className='ProfilePersonalItems'>
    <div className='ProfilePersonalContainers'>
        <h3>Personal Details</h3>
        <p>{user.fname}</p>
        <p>{user.lname}</p>
        <p>{user.mobile}</p>
        <p>{user.introduction}</p>
        <p>{user.YearsExp}</p>
    </div>
    </div>
    <div className='ProfilePersonalItems'>
    <div className='ProfilePersonalContainers'>
    <h3>Business Details</h3>
        <p>{user.address}</p>
        <p>{user.vatTaxNumber}</p>
        <p>Document</p>
        <p>{user.opAddress}</p>
    </div>
    </div>
    <div className='ProfilePersonalItems'>
    <div className='ProfilePersonalContainers'>
        <h3>Payment Details</h3>
        {user.bankDetails?.map((e)=>{
          return(<>
            <p>{e.AccNo}</p>
            <p>{e.Bank}</p>
            <p>{e.Branch}</p>
            <p>{e.BranchAddress}</p>
            <p>{e.Swift}</p>
            </>
          )
        })}
        </div>
        </div>
    <div className='ProfilePersonalItems'>
    <div className='ProfilePersonalContainers'>
        <h3>Setup</h3>
        <br></br>
        <p>Email Notifications - </p>
        <Toggle
  id='cheese-status'
  icons={false}
  // defaultChecked={this.state.cheeseIsReady}
  // onChange={this.handleCheeseChange} 
  />
        <p>Newsletter</p>     <Toggle
  id='cheese-status'
  icons={false}
  // defaultChecked={this.state.cheeseIsReady}
  // onChange={this.handleCheeseChange} 
  />
        <div className='setupBtnContainer'>
          <button className='setupBtn'>Change Password</button>
        </div>
    </div>
    </div>
    </div>
    <div className='ProfileProfession'>
    <div className='ProfilePersonalItems1'>
      <div className='profileProfessionContainer1'>
        <h3>Social Details</h3>
        <img src={icon1} className='profileProfessionIcon'></img>
        <img src={icon2} className='profileProfessionIcon'></img>
        <img src={icon3} className='profileProfessionIcon'></img>
        <img src={icon4} className='profileProfessionIcon'></img>
        <img src={icon5} className='profileProfessionIcon'></img>
        <img src={icon6} className='profileProfessionIcon'></img>
        <img src={icon7} className='profileProfessionIcon IMDBIcon'></img>
      </div>
      </div>
      <div className='profileProfessionContainer2'>
      <div className='profileProfessionContainerAck'>
        <div className='profileAcknowledgements'>
          <div className='profAck'>
          <h3>Acknowledgements</h3>
          </div>
        </div>
        <div className='profileReferrals'>
        <div className='profRef'>
          <h3>My Referals</h3>
          <ul>
          {referralData.map((e)=>{
            return <li>{e.email}</li>
          })}
          </ul>
        </div>
        </div>
      </div>
      </div>
      <div className='profileProfessionMain'>
      <div className='profileProfessionContainer3'>
        <h3>Upgrade To Company</h3>
        <div className='profileMatter'>
        <p>Company account allows the same functionality as a freelancer plus:</p>
        <ul>
          <li>4 additional users</li>
          <li>a shared team calendar</li>
        </ul>
          <p>Less mess. Higher efficiency.</p>
          <p>$20/month or </p>
          <p>$200 per year</p>
          </div>
          <div className='profileProButtonContainer'>
            <button className='profileProButton'>Upgrade</button>
          </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Profile;