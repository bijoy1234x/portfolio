import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Image from "./Image";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <div className="about">
    
           <Image />
        <h2> Hi, My Name is Bijoy Chouhan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>

          <Link to ="https://www.linkedin.com/in/bijoy-chouhan-88971622b/">
          <LinkedInIcon />
          </Link>

          <Link to ="https://mail.google.com/mail/u/0/#inbox">
          <EmailIcon />
          </Link>
      
          <Link to ="https://github.com/BIjoy123X">
          <GithubIcon />
          </Link>
        </div>


        <div>
          <a href="https://docs.google.com/document/d/11Dw1g95KzWUg0NBMbSsBwAAciqDp07IoD4VUpBrz-cs/edit?usp=sharing" className="btn">Download CV</a>
        </div>


      </div>
      <div className="skills">
        <h1> My Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> CS Fundamentals</h2>
            <span>
              Computer Networks, Operating System, Database Management System, Object Oriented Programming, Compiler Design, Data Structures and Algorithms
            </span>
          </li>
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Yarn, Express.js
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>JavaScript, Python, C, C++</span>
          </li>
          <li className="item">
            <h2>Designing Skills</h2>
            <span>Git, VSCode, Photoshop, Illustrator, MS Office</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
