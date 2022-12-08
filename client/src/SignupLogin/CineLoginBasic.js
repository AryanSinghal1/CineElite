import React, { useEffect, useState } from 'react'
import './cineLoginComp.css'
import logo1 from "../Logo/logo1.png";
import logo2 from "../Logo/logo2.png";
import logo from "../Logo/logo.png";
import { useSelector } from 'react-redux';
import axios from 'axios';

function CineLoginBasic() {
  return (
    <div className="info">
          <img src={logo1} className="logo1" alt="logo1"></img>
          <img src={logo2} className="logo2" alt="logo2"></img>
          <img src={logo} className="logo" alt="logo"></img>
          <div className="company">
            <p>Cine Elite</p>
          </div>
          </div>
  )
}

export default CineLoginBasic