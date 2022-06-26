import './App.css';

import React from "react";
import anime from "../src/anime.jpg";
import dezy from "../src/dezy.jpg";
import dicegame from "../src/dicegame.jpg"
import dribble from "../src/dribble.jpg";
import fitmeal from "../src/fitmeal.jpg";
import foodadda from "../src/foodadda.jpg";
import newspaper from "../src/newspaper.jpg";
import quiz from "../src/quiz.png";
import slideshow from "../src/slide-show.jpg";
import zoom_clone from "../src/zoom_clone.png";

export function Portfolio()
{
  /* projects list */
    const projects=[
      {
        name:"Zoom Clone" ,
        image:zoom_clone,
        frontend:"https://github.com/surbhimathur/zoom_clone-frontend",
        backend:"https://github.com/surbhimathur/zoom_clone_backend",
        link:"https://zoom-clone-video-call.netlify.app/",
        description:"Video call website where user can make a video call ,mute or unmute audio ,can start or stop video.",
        techstack:"React js,Material UI,WebRTC,Socket.io,Express"
      },
      {
        name:"Fit Meal" ,
        image:fitmeal,
        frontend:"https://github.com/surbhimathur/fitmeal-app",
        backend:"https://github.com/surbhimathur/fitmeal_backend",
        link:"https://fitmealapp.netlify.app/",
        description:"Diet chart app where user can get their personalized diet chart according to their body measurements to lose weight.",
        techstack:"React js,Material UI,Express,Axios."
      },
      {
        name:"Food Adda" ,
        image:foodadda,
        frontend:"https://github.com/surbhimathur/foodadda_frontend_react",
        backend:"https://github.com/surbhimathur/food_adda_backend",
        link:"https://food-adda-app.netlify.app/",
        description:"Food delivery service app where user can subscribe for a monthly plan and can order food.",
        techstack:"React js,Material UI,Express,Mongoose,Razorpay"
      },
      {
        name:"Quiz Corner" ,
        image:quiz,
        frontend:"https://github.com/surbhimathur/quiz_game",
        link:"https://quiz-corner.netlify.app/",
        description:"Quiz app where user can choose a category & then play the quiz. Every category has 10 questions.",
        techstack:"React js,Material UI,Trivia API,Axios."
      },
      
    {
      name:"Dice Game" ,
      image:dicegame,
      frontend:"https://github.com/surbhimathur/mygame.github.io",
      link:"https://surbhimathur.github.io/mygame.github.io/",
      description:"A multi player dice based board game where players competes to score 100 or more & win the game.",
        techstack:"HTML 5,CSS3,Javascript"
    },
    {
      name:"Newspaper design",
      image:newspaper,
      frontend:"https://github.com/surbhimathur/newspaper-github.io",
      link:"https://peaceful-saha-6d8db2.netlify.app/",
      description:"It is a newspaper sample design.",
        techstack:"HTML 5,CSS3,Bootstrap"
    },
    {
      name:"Dribbble design clone",
      image:dribble,
      frontend:"https://github.com/surbhimathur/drible.github.io",
      link:"https://dribbledemo.netlify.app/",
      description:"It is dribbble sample design.",
        techstack:"HTML 5 & CSS3"
    },
    {
      name:"Slideshow gallery",
      image:slideshow ,
      frontend:"https://github.com/surbhimathur/slideshow_gallery.github.io",
      link:"https://surbhimathur.github.io/slideshow_gallery.github.io/",
      description:"Sample design of slideshow gallery.",
        techstack:"HTML 5,CSS3,Javascript"
      
  },
  {
    name:"Dezy" ,
    image:dezy,
    frontend:"https://github.com/surbhimathur/dezyit.github.io",
    link:"https://surbhimathur.github.io/dezyit.github.io/",
    description:"Sample design",
        techstack:"HTML 5 & CSS3"
},

];
    return(
       /* portfolio design and code */
        <div className="portfolio_section" id="portfolio">
            <h2 className="skill_heading">Portfolio</h2>
            <div className="portfolio">
                {projects.map((pr)=><Projectdetail  name={pr.name} image={pr.image} link={pr.link} frontend={pr.frontend} backend={pr.backend} description={pr.description} techstack={pr.techstack}/>)}

                </div>     
        </div>
    );
}

function Projectdetail({name,image,link,frontend,backend,description,techstack})
{
 

    return(
      /* project list */
        <div className="project" data-aos="flip-left" 
        data-aos-duration="1000" data-aos-easing="ease-in">
       <div className="imagebox">
           <img src={image} /> 
           <div class="overlay">{name}</div>
           </div>
           <div className="project_name"> 
           {/* <p>{name}</p>  */}
           <div className="project_description">
           <p>{description}</p>
           <p id="techstack"><u>Tech Stack:</u>&nbsp;&nbsp;{techstack}</p>
           </div>
           
           <div className="project_links">
         
             <a href={frontend} target="_blank" ><p className="frontend">Front End</p></a>
            {backend &&<a href={backend} target="_blank" ><p className="backend">Back End</p></a>}
             <a href={link} target="_blank" ><p className="live">Live Demo</p></a>
           </div>
           </div>
            
        </div>
    )
}