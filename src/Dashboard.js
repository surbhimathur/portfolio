import './App.css';
import "aos/dist/aos.css";

import React, { useEffect } from 'react';

import Aos from "aos";
import profilepic from "../src/profilepic.png";

export function Dashboard(){
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

    
    return(
  <div className="dashboard" id="dashboardd">
      <div className="hero_section">
          <div className="hero_heading">
          <h1 className="surbhi">Hello! I am Surbhi Mathur.</h1> 
          <p className="designation">Front End Developer</p> 
          </div>

          <div className="hero_image">
            <img src={profilepic} />
          </div>
      </div>
      
</div>
 
    ); 
}