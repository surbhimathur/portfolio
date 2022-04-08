import ed from "../src/ed.png";

export function Education()
{
    return(
        <section className="education_section" id="education">
<h1 className="about_heading edu_heading">Education</h1>
      <div className="education">
  {/*<h1 className="about_heading edu_heading">Education</h1>*/}
  
  <div className="education_details">
  <div className="mca"  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1000">
  <p className="degree">Master Of Computer Applications (MCA)</p>
     <p className="college_name">APEX INSTITUTE OF MANAGEMENT & SCIENCE (2011-2014)</p>
    <p className="summary">Overall percentage-70.9%, Developed a software “Contact manager” to
save, retrieve & update your contacts. Developed a quiz game as mini
project. Certification in PHP programming language.
</p>
  </div>
    
  <div className="mca" data-aos="zoom-in" data-aos-delay="60"
    data-aos-duration="1000">
    <p className="degree">Bachelor Of Computer Applications (BCA)</p>
    <p  className="college_name">SOPHIA GIRLS COLLEGE (2008-2011)</p>
    <p className="summary">Overall percentage- 66.27%, Distinction certificate in PC Software and
Internet Tools & Web Development.
</p>
</div>

<div className="mca" data-aos="zoom-in" data-aos-delay="70"
    data-aos-duration="1000">
<p className="degree">Senior Secondary</p>
    <p  className="college_name">ST MARY’S CONVENT SR SEC SCHOOL(2007-2008)</p>
    <p className="summary">Overall percentage- 78.6%
</p>
</div>

<div className="mca" data-aos="zoom-in" data-aos-delay="80"
    data-aos-duration="1000">
<p className="degree">Secondary</p>
    <p  className="college_name">ST MARY’S CONVENT SR SEC SCHOOL(2005-2006)</p>
    <p className="summary secondary">Overall percentage- 67.4%
</p>
</div>
  </div>

  <div className="edu_image" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1000">
    <img src={ed} />
  </div>
  
  </div>

</section>
    )
}