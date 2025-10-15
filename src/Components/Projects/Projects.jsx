import React from "react";
import "./Projects.css";
import projects from "../../assets/projects.jpeg";
import youtubeclone from "../../assets/youtubeclone.png";
import weather from "../../assets/weather.png";
import login from "../../assets/login.png";
import food from "../../assets/food.png";
import car from "../../assets/car.png";
import todo from "../../assets/todo.png";
import calculator from "../../assets/calculator.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      image:youtubeclone,
      title: "U-tube Clone",
      netify: "https://mrsakuprojectsvideoclone.netlify.app",
      github:"github"
    },
    ,
    {
      id: 2,
       image:todo,
      title: "To Do App",
      netify: "https://mrsakuprojecttodolist.netlify.app/",
      github:"github"
    },
    {
      id: 3,
       image:food,
      title: "Food App",
      netify: "https://mrsakuprojectsfoodapp.netlify.app",
      github:"github"
    },
    {
      id: 4,
       image:login,
      title: "Login Form",
      netify: "https://mrsakuprojectloginform.netlify.app",
      github:"github"
    },
    {
      id: 5,
       image:car,
      title: "Cars Brand",
      netify: "https://mrsakuprojectcars.netlify.app",
    },
    {
      id: 6,
       image:weather,
      title: "Weather App",
      netify: "https://mrsakuprojectweatherapp.netlify.app",
      github:"github"
    },
    {
      id: 7,
       image:calculator,
      title: "Calculator",
      netify: "https://mrsakuprojectcalculator.netlify.app",
      github:"github"
    },
  ];
  return (
    <>
      <div className="projects">
        <div className="head">
          {" "}
          <h1 className="tt">Some Projects</h1>
        </div>
       <div className="mains">
         {project.map((project) => {
          return (
             <div id={project.id} className="pro">
              <img src={project.image} alt="" className="images"/>
              <h2 className="project-title">{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="pro-btns">
                <a href={project.netify}>
                <button>See</button>
              </a>
               <a href={project.github}>
                <button className="code">Code</button>
              </a>
              </div>
           </div>
          );
        })}
       </div>
      </div>
    </>
  );
};

export default Projects;
