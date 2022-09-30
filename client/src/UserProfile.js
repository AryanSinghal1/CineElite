import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import icon1 from '../src/Logo/icon1.png';
import icon2 from '../src/Logo/icon2.png';
import icon3 from '../src/Logo/icon3.png';
import icon4 from '../src/Logo/icon4.png';
import icon5 from '../src/Logo/icon5.png';
import icon6 from '../src/Logo/icon6.png';
import icon7 from '../src/Logo/icon7.png';
import './UserProfile.css'
function UserProfile() {
  const navigate = useNavigate();
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
        navigate("/nologin")
      }else{
        setUser(getData);
      }
    }
    useEffect(()=>{
        getUser();
    },[]);
    console.log(user);
  return (
    <div className='userProfileMain'>
        <div className="userProfileDashboardInfo">
    <p className="userProfileInfoText">CineElite</p>
  </div>
        <div className="userProfileDashboardContainer">
            <div className='userProfileContainer'>
              <div className='userProfileDetailsContainer'>
                <div className='userProfileImageContainer'>
                  <img className='userProfileImage' src='https://th.bing.com/th/id/R.48b666d6179cbf4cdd86b80bac7f0df5?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0'></img>
                </div>
                <div className='userProfileNameContainer'>
                <div className='userProfileName'>
                  <div className='userProfileNameDetails'>
                    <h2 className='userProfileHeading'>{user.fname} {user.lname}</h2>
                    <p className='userProfileText'>Photographer</p>
                  </div>
                  <div className='userSocialMediaDetails'>
                    <div className='userSocialMediaHandles'>
                      <img className='userSocialMediaIcon' src={icon1}></img>
                      <img className='userSocialMediaIcon' src={icon2}></img>
                      <img className='userSocialMediaIcon' src={icon3}></img>
                      <img className='userSocialMediaIcon' src={icon4}></img>
                      <img className='userSocialMediaIcon' src={icon5}></img>
                      <img className='userSocialMediaIcon' src={icon6}></img>
                      <img className='userSocialMediaIcon imdbIcon' src={icon7}></img>
                    </div>
                    <div className='userProfileAction'>
                      <p>Vouch For User</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className='userProfileOtherContainer'>
            <div className='userProfileBasicDetailsContainer'>
            <div className='userContactContainer'>
            <div className='userContact'>
              <div className='userContactDetails'>
                <p>Member Since</p>
                <p>Experience {user.YearsExp}</p>
                <p>Based in</p>
              </div>
              <div className='userContactButtonContainer'>
                <button className='userContactButton'>Contact User</button>
              </div>
            </div>
            </div>
            <div className='userSkillsContainer'>
            <div className='userContact'>
              <h3 className='userProfileSkills'>Skills</h3>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            </div>
            </div>
            <div className='userMoreInfoContainer'>
                <div className='userAboutContainer'>
            <div className='userAbout'>
              <h3 className='userProfileSkills'>About</h3>
              <div className='userProfileAbout'>
                <p>{user.introduction}</p>
              </div>
            </div>

                </div>
                <div className='userKitContainer'>
            <div className='userAbout'>
              <h3 className='userProfileSkills'>{user.fname}'s Kit</h3>
            </div>
                  
                </div>
            </div>
            </div>
  </div>
  </div>
  )
}

export default UserProfile