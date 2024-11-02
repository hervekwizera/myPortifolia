// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Front-end Developer passionate about creating amazing digital experiences.</p>
      <button onClick={() => window.location.href = "/projects"}>View My Work</button>
    </div>
  );
}

export default Home;
