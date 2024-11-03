// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";
import { FaUserFriends, FaBullseye, FaHandsHelping, FaHistory, FaHandshake } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>

      <div className="about-cards">
        <motion.div
          className="about-card card-one"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FaUserFriends className="icon" />
          <h2>****Who i am?****</h2>
          <p>
            Welcome to kwizera herve! I am passionate creator, problem solver, and innovator bringing ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="about-card card-two"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <FaBullseye className="icon" />
          <h2>****Our Mission****</h2>
          <p>
            My mission is to empower individuals and businesses through technology, driving success and sparking growth.
          </p>
        </motion.div>

        <motion.div
          className="about-card card-three"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <FaHandsHelping className="icon" />
          <h2>****Why Choose Us*****?</h2>
          <ul>
            <li><strong>User-Centric Design</strong>: Beautiful and functional projects</li>
            <li><strong>Quality Commitment</strong>: Every detail matters</li>
            <li><strong>Collaborative Approach</strong>: You’re a partner in the journey</li>
          </ul>
        </motion.div>

        <motion.div
          className="about-card card-four"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <FaHistory className="icon" />
          <h2>****Our Story****</h2>
          <p>
            Founded in 2024, we started with a simple idea: bridging the gap between people and technology.
          </p>
        </motion.div>

        <motion.div
          className="about-card card-five"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <FaHandshake className="icon" />
          <h2>****Our Promise****</h2>
          <p>
            When you work with us, you’re part of the journey. Let’s create something amazing together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
