import React, { useEffect } from "react";
import Logo3 from '../Logo/Main3.png';
import Logo2 from '../Logo/Main2.png';
import Logo1 from '../Logo/Main1.png';
import inner from '../Logo/circle_inner.png';
import upper from '../Logo/circle_upper.png';
import logo from '../Logo/logo.png';
import cineText from '../Logo/CineEliteText.png';
import {Link} from 'react-router-dom';
import "./Home.css";
function Home() {
  return (
    <div className="MainLandingContainer">
    <div className="MainLandingContainer">
      <div className="navbarContainer">
      <div className="navbar">
        <div className="navContent">
          <img src={logo} alt="logo"></img>
          <img className="cineText" src={cineText} alt="Text"></img>
        </div>
        <div className="navContent">
          <ul>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="MainPageContainerDiv">
        <div className="mainPageInfoDivContainer">
        <div className="mainPageInfoDiv">
        <div className="mainPageInfoDivText">
          <h3>Your World</h3>
          <h3>Your Business</h3>
          <h3>Your Expertise</h3>
          <h3>In Focus</h3>
          </div>
          <div className="mainPageActionButtonContainer">
          <button className="mainPageActionButton"><a href="/userlogin">Go</a></button>
          </div>
        </div>
        </div>
      </div>
      <img className="mainPageImage logo1" src={Logo1} alt='logo1'></img>
      <img className="mainPageImage logo2" src={Logo2} alt='logo2'></img>
      <img className="mainPageImage logo3" src={Logo3} alt='logo3'></img>
      <div className="circle">
        <img className="InnerCircleup" src={upper} alt="innerCircle"></img>
        <img className="InnerCircle" src={inner} alt="innerCircle"></img>
      </div>
      <div className="circleDown">
        <img className="InnerCircleup" src={inner} alt="innerCircle"></img>
        <img className="InnerCircle" src={upper} alt="innerCircle"></img>
      </div>
    </div>
    </div>
  );
}

export default Home;
