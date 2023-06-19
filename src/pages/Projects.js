import React from "react";
import ProjectItemList from "../components/ProjectItemList";
import "../styles/Project.css";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItemList
              name={project.name}
              image={project.image}
              livelink={project.livelink}
              githublink={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
