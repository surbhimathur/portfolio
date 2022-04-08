import './App.css';
import "aos/dist/aos.css";

import React, { useEffect } from 'react';

import Aos from "aos";

export function Dashboard(){
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

    
    return(
  <div className="dashboard" id="dashboardd">
      <div className="hero_section">
          <div className="skills_image">
          <div className="skills1">
            <p>HTML</p>
          </div>
          <div className="skills2">
            <p>CSS</p>
          </div>
         
          <div className="skills4">
            <p>React JS</p>
          </div>
          <div className="skills5">
            <p>Javascript</p>
          </div>
          </div>
      </div>
      
</div>
 
    ); 
}