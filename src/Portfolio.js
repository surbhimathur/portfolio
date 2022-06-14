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
        link:"https://zoom-clone-video-call.netlify.app/"
      },
      {
        name:"Fit Meal" ,
        image:fitmeal,
        frontend:"https://github.com/surbhimathur/fitmeal-app",
        backend:"https://github.com/surbhimathur/fitmeal_backend",
        link:"https://fitmealapp.netlify.app/"
      },
      {
        name:"Food Adda" ,
        image:foodadda,
        frontend:"https://github.com/surbhimathur/foodadda_frontend_react",
        backend:"https://github.com/surbhimathur/food_adda_backend",
        link:"https://food-adda-app.netlify.app/"
      },
      {
        name:"Quiz Corner" ,
        image:quiz,
        frontend:"https://github.com/surbhimathur/quiz_game",
        link:"https://quiz-corner.netlify.app/"
      },
      
    {
      name:"Slideshow gallery",
      image:slideshow ,
      frontend:"https://github.com/surbhimathur/slideshow_gallery.github.io",
      link:"https://surbhimathur.github.io/slideshow_gallery.github.io/"
    },
    {
      name:"Newspaper design",
      image:newspaper,
      frontend:"https://github.com/surbhimathur/newspaper-github.io",
      link:"https://peaceful-saha-6d8db2.netlify.app/"
    },
    {
      name:"Dribbble design clone",
      image:dribble,
      frontend:"https://github.com/surbhimathur/drible.github.io",
      link:"https://dribbledemo.netlify.app/"
    },
    {
      name:"Dice Game" ,
      image:dicegame,
      frontend:"https://github.com/surbhimathur/mygame.github.io",
      link:"https://surbhimathur.github.io/mygame.github.io/"
  },
  {
    name:"Dezy" ,
    image:dezy,
    frontend:"https://github.com/surbhimathur/dezyit.github.io",
    link:"https://surbhimathur.github.io/dezyit.github.io/"
},

];
    return(
       /* portfolio design and code */
        <div className="portfolio_section" id="portfolio">
            <h2 className="skill_heading">Portfolio</h2>
            <div className="portfolio">
                {projects.map((pr)=><Projectdetail  name={pr.name} image={pr.image} link={pr.link} frontend={pr.frontend} backend={pr.backend} />)}

                </div>     
        </div>
    );
}

function Projectdetail({name,image,link,frontend,backend})
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
           <div className="project_links">
             <a href={frontend} target="_blank" ><p className="frontend">Front End</p></a>
            {backend &&<a href={backend} target="_blank" ><p className="backend">Back End</p></a>}
             <a href={link} target="_blank" ><p className="live">Live Demo</p></a>
           </div>
           </div>
            
        </div>
    )
}