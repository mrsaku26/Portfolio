import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <>
    <div className="contact">
      <h1>Yo Can Contact Me through</h1>
      <div className="ic">
       <div className="ics">
         <h3>Facebook</h3>
        <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
      </div>
       <div className="ics">
        <h3>GitHub</h3>
        <a href="https://github.com/Sangitkc/project.git">
        <FontAwesomeIcon  icon={faGithub}/></a>
      </div>
       <div className="ics">
        <h3>Instagram</h3>
        <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
       </div>
      </div>
    </div>
    </>
  )
}

export default Contact