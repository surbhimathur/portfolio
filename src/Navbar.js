import "./App.css";

import { MdPsychology, MdSchool } from "react-icons/md";
import React, { useEffect, useState } from "react";

import { AiOutlineFileText } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import {FaBars} from "react-icons/fa";
import { GiFiles } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import {SiGmail} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export function Navbar() {
  /* for smooth page scrolling */
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const[showLinks,setShowLinks] =useState(false);
  
  return (
    /* Navigation bar design and functionality */
    <div className="navbar">
      <div className="navigation_links" > 
      
      {/* navigation links */}
       <div className="links" id={showLinks ? "hidden" : ""}>   
       <a
        href="/"
        onClick={e => {
          let dashboardd = document.getElementById("dashboardd");
          e.preventDefault();
          dashboardd && dashboardd.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("dashboardd", "dashboardd", "/dashboardd");
        }}
        >
         <button className="buttons"><AiOutlineHome className="nav_icons"/>Home</button>
       </a>
          
          
          
          <a
        href="/"
        onClick={e => {
          let about = document.getElementById("about");
          e.preventDefault();
          about && about.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("about", "about", "/about");
        }}
        >
         <button className="buttons"><BsPersonCircle className="nav_icons"/>About</button>
            </a> 
           

           
           <a
        href="/"
        onClick={e => {
          let skills = document.getElementById("skills");
          e.preventDefault();
          skills && skills.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("skills", "skills", "/skills");
        }}
        >
            <button className="buttons"><MdPsychology className="nav_icons"/>Skills</button>
            </a>
           
           
           
           <a
        href="/"
        onClick={e => {
          let education = document.getElementById("education");
          e.preventDefault();
          education && education.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("education", "education", "/education");
        }}
        >
           <button className="buttons"><MdSchool className="nav_icons" />Education</button>
           </a>
           
           
           
           <a
        href="/"
        onClick={e => {
          let portfolio = document.getElementById("portfolio");
          e.preventDefault();
          portfolio && portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("portfolio", "portfolio", "/portfolio");
        }}
        >
           <button className="buttons"><GiFiles className="nav_icons" />Portfolio</button>
           </a>
           
           
           
           <a
        href="/"
        onClick={e => {
          let contact = document.getElementById("contact");
          e.preventDefault();
          contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("contact", "contact", "/contact");
        }}
        >
           <button className="buttons"><MdOutlineContactMail className="nav_icons" />Contact</button>
           </a>
           </div>
           <button className="toggle" onClick={()=> setShowLinks(!showLinks)}><FaBars  className="bars"/></button>
           <div className="social_icons">
       <div className="social_links">
       <a href="https://github.com/surbhimathur" target="_blank"> <VscGithub className="github" /> </a>
       </div> 
       <div className="social_links"> <a href="https://www.linkedin.com/in/surbhi-mathur-0958b71b5/" target="_blank">  <BsLinkedin className="linkedin" /> </a></div>
       <div className="social_links"><a href="mailto:surbhimathur9@gmail.com"><SiGmail className="gmail" /></a></div>
        </div>
      </div>
      
    </div>
  );
}
