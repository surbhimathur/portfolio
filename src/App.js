import './App.css';

import {About} from "./About.js";
import {BrowserRouter} from "react-router-dom";
import {Contact} from "./Contact.js";
import {Dashboard} from "./Dashboard.js";
import {Education} from "./Education.js";
import {Navbar} from "./Navbar.js";
import {Portfolio} from "./Portfolio.js";
import React from 'react';
import{Skills} from "./Skills.js";

function App() {
  return (
    <div className="App">
      <div className="main_page">
      <BrowserRouter>
      <Navbar />
      <Dashboard />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      </BrowserRouter>
        
        
      </div>
    </div>
  );
}

export default App;
