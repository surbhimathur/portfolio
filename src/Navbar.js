import "./App.css";

import React, { useEffect } from "react";

import { AiOutlineFileText } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { GiFiles } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

export function Navbar() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="navbar">
      <div className="profile_pic">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH8dvJfpsriRw/profile-displayphoto-shrink_200_200/0/1615782802188?e=1652313600&v=beta&t=UdgMBOdj-6yzJRqOTcIdY1JppCU6bJlnCvEkUu19RT0" />
      </div>

      <div className="userdetails">
        <h2 className="myname">Surbhi Mathur</h2>
        <h3 className="designation">Front End Developer</h3>
        
      {/*<div className="icons">
         <VscGithub className="github" /> <BsLinkedin className="linkedin" />
        </div>*/}
      </div>

      <div className="navigation_links"> 
      
       <div className="links"> 
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
          </div>
          
          <div className="links">
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
           </div>

           <div className="links">
           <a
        href="/"
        onClick={e => {
          let skills = document.getElementById("skills");
          e.preventDefault();
          skills && skills.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("skills", "skills", "/skills");
        }}
        >
            <button className="buttons"><BsPersonCircle className="nav_icons"/>Skills</button>
            </a>
           </div>
           
           <div className="links">
           <a
        href="/"
        onClick={e => {
          let education = document.getElementById("education");
          e.preventDefault();
          education && education.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("education", "education", "/education");
        }}
        >
           <button className="buttons"><AiOutlineFileText className="nav_icons" />Education</button>
           </a>
           </div>
           
           <div className="links">
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
           </div>
           
           <div className="links">
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
           
       
      </div>
    </div>
  );
}
