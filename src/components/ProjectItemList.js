import React from "react";

const ProjectItemList = ({ image, name, livelink, githublink }) => {
  const openDemo = () => {
    window.open(livelink, "_blank");
  };

  const openGithub = () => {
    window.open(githublink, "_blank");
  };
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <div className="button-group">
      <button onClick={openDemo}>Live Demo</button>
      <button onClick={openGithub}>Github</button>
      </div>
    </div>
  );
};

export default ProjectItemList;
