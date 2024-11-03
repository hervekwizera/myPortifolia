// src/pages/Home.js
import React from "react";
import profileImage from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.h1
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Hi, I'm kwizera herve
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Front-end Developer passionate about crafting engaging digital experiences.
        </motion.p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: "#ffb300" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => (window.location.href = "/projects")}
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;

