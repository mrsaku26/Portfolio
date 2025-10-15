import React from "react";
import "./Home.css";
import image from "../../assets/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faGithub } from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <h1>Hey, It's me <span>Saku!</span></h1>
          <p>
            A Full Stack Web Developer passionate about building scalable and
            dynamic web applications with React, API integrations, and backend
            solutions.
            <br />
            I build modern, responsive and user-friendly websites using HTML,CSS,JAVASCRIPT,REACT,AND,Node.js. I've developed multiple projects including an
            <br /> E-commerce website, Ai-based blog platform and YouTube clone. I love truning ideas into interactive and scalable web applications.
          </p>
          <div className="icons">
            <a href="">
           <FontAwesomeIcon icon={faFacebook}  className="icon"/>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram}  className="icon"/>
            </a>
            <a href="https://github.com/Sangitkc/project.git">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
