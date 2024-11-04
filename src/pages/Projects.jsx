// src/pages/Project.js
import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

function Project() {
  const projects = [
    { title: "Project One", description: "An innovative web application", color: "#ff6363" },
    { title: "Project Two", description: "A responsive design challenge", color: "#ffa600" },
    { title: "Project Three", description: "A dynamic e-commerce site", color: "#bc5090" },
    { title: "Project Four", description: "An interactive dashboard", color: "#58508d" },
    { title: "Project Five", description: "A social media platform", color: "#003f5c" },
  ];

  return (
    <div className="project-page">
      <h1 className="project-title">My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: project.color }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
