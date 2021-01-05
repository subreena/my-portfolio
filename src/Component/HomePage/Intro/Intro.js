import React from 'react';
import introImg from '../../../images/introImg.PNG'
import '../Intro/Intro.css'
const Intro = () => {
 return (
<div className="container intro">
<div className="row p-4">
 {/* Img */}
<div className="col-12 col-lg-6">
<img src={introImg} alt="" class="w-100" />
</div>
{/* TEXT */}
<div className="col-12 col-lg-6 d-flex align-items-center">
  <div className="intro-text m-3">
 <h3>Hello! I am Subreena</h3>
 <h2 className="text-muted">A Full-stack Web Developer and Designer</h2>
 <p>To intoduce myself, Firstly I like would say that I am a MERN stack learning Web Developer and designer.I have flourished my expertise in React js, Node, Mongodb, Express, Gatsby, Javascript and more. I am very curious and am ambitiuos to polish my skills and learn new skills everyday.</p>
<p>I am a student at the department of Information and Communication Engineering in Noakhali Science and Technology. </p>
 <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1FQ-AdlHb4uPAgi3DE2MVKaQAs-kmVgPb/view?usp=sharing"
className="btn btn-lg btn-outline-dark text-bold mr-3">Check Out My Resume</a>
 </div>
 </div>
</div>
  </div>
    );
};

export default Intro;