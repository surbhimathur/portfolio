import './App.css';

import React from "react";
import anime from "../src/anime.jpg";
import dezy from "../src/dezy.jpg";
import dicegame from "../src/dicegame.jpg"
import dribble from "../src/dribble.jpg";
import foodadda from "../src/foodadda.jpg";
import newspaper from "../src/newspaper.jpg";
import slideshow from "../src/slide-show.jpg";

export function Portfolio()
{
  /* projects list */
    const projects=[
    {
      name:"Search anime using API" ,
      image:anime,
      link:"https://youthful-mestorf-727a3f.netlify.app/"
    },
    {
      name:"Slideshow gallery",
      image:slideshow ,
      link:"https://surbhimathur.github.io/slideshow_gallery.github.io/"
    },
    {
      name:"Newspaper design",
      image:newspaper,
      link:"https://peaceful-saha-6d8db2.netlify.app/"
    },
    {
      name:"Dribbble design clone",
      image:dribble,
      link:"https://fanciful-granita-28f927.netlify.app/"
    },
    {
        name:"Food adda" ,
        image:foodadda,
        link:"https://surbhimathur.github.io/foodadda.github.io/"
    },
    {
      name:"Dice Game" ,
      image:dicegame,
      link:"https://surbhimathur.github.io/mygame.github.io/"
  },
  {
    name:"Dezy" ,
    image:dezy,
    link:"https://surbhimathur.github.io/dezyit.github.io/"
},

];
    return(
       /* portfolio design and code */
        <div className="portfolio_section" id="portfolio">
            <h2 className="skill_heading">Portfolio</h2>
            <div className="portfolio">
                {projects.map((pr)=><Projectdetail  name={pr.name} image={pr.image} link={pr.link}/>)}

                </div>     
        </div>
    );
}

function Projectdetail({name,image,link})
{
 

    return(
      /* project list */
        <div className="project" data-aos="flip-left" 
        data-aos-duration="1000" data-aos-easing="ease-in">
       
           <a href={link} target="_blank"><img src={image} /></a>
            <p className="project_name">{name}</p>
            
        </div>
    )
}