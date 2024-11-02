// src/pages/Projects.js
import React from "react";

function Projects() {
  const projects = [
    { id: 1, name: "Project One", description: "Description of Project One" },
    { id: 2, name: "Project Two", description: "Description of Project Two" },
    { id: 3, name: "Project Three", description: "Description of Project Three" },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
