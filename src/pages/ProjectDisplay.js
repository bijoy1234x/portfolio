import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";
import GithubIcon from "@material-ui/icons/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to ="https://github.com/BIjoy123X?tab=repositories">
          <GithubIcon />
          </Link>
    </div>
  );
}

export default ProjectDisplay;
