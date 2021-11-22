import "./resume.css";
import React, { useState } from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library
// import pic from "../../img/ralph-resume.png";



import weird from "../../pdf/tester.pdf";



const Resume = () => {

  const [state]=useState(true);
  let url="https://www.icloud.com/pages/0Amm2K0YpfPIQbAn3IST-5E0A#Resume_";
  let element=<p>No handle exists for this user!</p>;
  if(state) element=<a href={url}>Link to resume</a>;

  return (
    <div className="pdf-container"> 
     {element} 
    </div>

  );
};

export default Resume