import { MdDownload } from "react-icons/md";

export function About() {


return(
<div className="about_section" data-aos="fade-left"  data-aos-duration="1000" id="about">
      
       <div className="details_section">
       
         <div className="profile_image">
           <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH8dvJfpsriRw/profile-displayphoto-shrink_200_200/0/1615782802188?e=2147483647&v=beta&t=Fdx3xOukRT19ArH3zfDW6pho3GfGQv6bP5Yy-HbWfK8"/>
         </div>
         <div className="vertical_line"></div>
         <div className="mydetails">
         <h1 className="about_heading">About</h1>
           <p> I am Surbhi Mathur. I am from Ajmer, Rajasthan and currently living in Bangalore. I am a Front End Developer. I am  Passionate
about designing websites having unique and creative designs. Willing to learn new
web designing languages, tools and frameworks. Designed some samples using
HTML5, CSS3, JavaScript and React js. Looking to start the career as an entry-level
software engineer with a reputed firm driven by technology.</p>
        <a href="https://github.com/surbhimathur/portfolio/raw/master/Surbhi_resume2021%20(1).pdf" download="surbhi_resume.pdf" className="download_link"><button className="download"><MdDownload  className="download_icon"/>Download Resume</button></a>
         </div>
       </div>
      </div>
)
}