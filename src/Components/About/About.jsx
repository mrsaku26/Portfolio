import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about">
     <div className="top">
       <h1>About Me!</h1>
      <p>I'm a full-stack developer who loves building clean, functional, and user-friendly web applications. I work with both frontend and backend technologies to create smooth  experiences. Whether designing interfaces, integrating APIs, or optimizing performance, I enjoy solving challenges and bringing ideas to life. I'm always learning and exploring new tools to improve my skills. Let’s connect and create something great!</p>
     </div>
     <div className="bottom">
      <h1 className='bot-h1'>Skills & Technologies :</h1>
      <p><span>FRONTEND : </span>HTML,CSS,JS,REACT,BOOTSTRAP</p>
      <p><span>BACKEND : </span>NODE.JS,EXPRESS.JS</p>
      <p><span>DATABASE : </span>MONGODB</p>
      <p><span>TOOLS : </span>GIT,GITHUB,POSTMAN,API</p>
      <div className="low">
        <h1>Passion :</h1>
        <p><span>1.</span> I enjoy for solving coding challenges and creating efficient solutions.</p>
        <p><span>2.</span>I love building web applications that are both functional user-friendly.</p>
        <p><span>3.</span> I enjoy exploring new technologies and keeping up with the latest trends in webdevelopment.</p>
        <p><span>4.</span>I'm passionate about designing smooth and intutive user experiences.</p>
      </div>
     </div>
    </div>
    </>
  )
}

export default About