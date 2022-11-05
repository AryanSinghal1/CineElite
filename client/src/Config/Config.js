import React from "react";
import "./config.css";
import logo from "../Logo/logo.png";
import in1 from "../Logo/In1.png";
import in2 from "../Logo/In2.png";
import in3 from "../Logo/In3.png";

const Config = ()=>{
    return(
    <div className="main">
     <div className="config_main">
        <div className="navigation">
            <div className="config_head">
                <p className="nav_head">Billing</p>
            </div>
            <div className="nav_heading">
            <div>Overview</div>
            <div>Documents</div>
            <div>Customers</div>
            <div>Suppliers</div>
            <div>Configs</div>
            </div>
            <div className="nav_logo">
                <img src={logo}></img>
            </div>
        </div>
        <div className="confighead">Configuration</div>
        <div className="configtemplate">Templates</div>
        <div className="configbox">
            <div className="configbox1">
            <img className="img1" src={in1}></img>
            </div>
            <div className="configbox2">
            <img className="img2" src={in2}></img>
            </div>
            <div className="configbox3">
            <img className="img3" src={in3}></img>
            </div>
        </div>
        <div className="configboxtext">
        <div className="configboxtext1">Modern</div>
        <div className="configboxtext2">Minimal 1</div>
        <div className="configboxtext3">Classified</div>
        </div>
        <div className="configsub1">Terms And Conditions</div>
        <input className="terms" type="text" ></input>
        <div className="note">Note</div>
        <input className="notes" type="text" ></input>
        <div className="textfield">Text Field</div>
        <input className="textfieldcontainer" type="text" ></input>
        <div className="doccontainer">Document Prefix</div>
        <input className="docprefix" type="text" ></input>
        <div className="btnpreview">
        <button className="preview">Preview</button>
        </div>
        </div>
        </div>
    );
}

export default Config;