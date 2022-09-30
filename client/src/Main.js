import React from "react";
import Design from "./Logo/Untitled1.png";
import extra from "./Logo/Rect.png";
import vector from "./Logo/Vector.png";
import {Link} from 'react-router-dom';
import "./Main.css";
function Main() {
  return (
    <div className="MainLandingContainer">
      <img className="BlueVector" src={vector}></img>
      <div className="Navbar"></div>
      <div className="registerMainContainer">
        <div className="registerMainContainerLogin">
          <div className="registerMain">
          <div className="registerLogin">
          <div className="registerLoginText">
            <p className="MainText">Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="registerLoginButtonsContainer">
            <Link to="/register"><button className="registerMainButton">Register</button></Link>
            <p>Or</p>
            <Link to="/userlogin"><button className="loginMainButton">Login</button></Link>
          </div>
          </div>
          </div>
        </div>
        <div className="registerMainPicContainer">
          <div className="registerMainPic">
            <img
              className="registerMainLogoImage"
              src={Design}
              alt="Main Image"
            ></img>
            <img
              className="ExtraImage"
              src={extra}
              alt="Main Image"
            ></img>
          </div>
        </div>
      </div>
      <div className="registerMainLogo">
        <p className="registerMainText">
          About <b>Cine Elite</b>
        </p>
      </div>
    </div>
  );
}

export default Main;
