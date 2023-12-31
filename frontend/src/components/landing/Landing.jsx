import React from "react";
import { Link } from 'react-router-dom'
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div>
        <h1>TechScape </h1>
        <div>
          <h2>Discover.</h2>
          <h2>Innovate.</h2>
          <h2>Build.</h2>
        </div>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
};

export default Landing;
