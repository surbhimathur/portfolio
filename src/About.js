import { MdDownload } from "react-icons/md";
import mypic from "../src/mypic.jpg";

export function About() {
return(
  /*about section design and code */
<div className="about_section" data-aos="fade-left"  data-aos-duration="1000" id="about">
      
       <div className="details_section">
       {/*profile image div*/}
         <div className="profile_image">
           <img src={mypic}/>
         </div>
         <div className="vertical_line"></div>
         {/* my details div */}
         <div className="mydetails">
         <h1 className="about_heading">About</h1>
           <p> I am Surbhi Mathur. I am from Ajmer, Rajasthan and currently living in Bangalore. I am a Front End Developer. I am  Passionate
about designing websites having unique and creative designs. Willing to learn new
web designing languages, tools and frameworks. Designed some samples using
HTML5, CSS3, JavaScript and React js. I have pursued Full Stack Developer Course from Guvi. Looking to start the career as an entry-level
software engineer with a reputed firm driven by technology.</p>
        <a href="https://github.com/surbhimathur/portfolio/blob/master/surbhi_mathur_resume_2022.pdf" target="_blank" className="download_link"><button className="download"><MdDownload  className="download_icon"/>Download Resume</button></a>
         </div>
       </div>
      </div>
)
}