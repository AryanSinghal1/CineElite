import axios from "axios";
import React from "react";
import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
function SignupUserCard(props) {
  const verified = async () => {
    let userData = {
      email: props.email,
    };
    await axios.post("/api/admverify", userData);
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
    <img src={props.photo} width="300" height="300"></img>
      <p>{props.fname}{props.lname}</p>
      <p>{props.email}</p>
      <p>{props.mobile}</p>
      <p>{props.address}</p>
      <p>{props.VAT}</p>
      <p>{props.intro}</p>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js" width="400" height="400">
      <Viewer fileUrl={props.vatDoc} plugins={[defaultLayoutPluginInstance]}></Viewer>
      </Worker>
      <button onClick={verified}>Verify It</button>
    </>
  );
}

export default SignupUserCard;
