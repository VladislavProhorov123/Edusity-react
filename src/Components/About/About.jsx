import React from "react";
import "./About.css";
import about_img from "/src/assets/about.png";
import play_icon from "/src/assets/play-icon.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Founded on a vision of excellence and innovation, You University is
          dedicated to empowering students with the knowledge, creativity, and
          global perspective needed to shape the future. For over a decade, we
          have inspired generations of learners to think critically, lead
          confidently, and make a positive impact on the world.
        </p>
        <p>
          At You University, education goes beyond textbooks — it’s about
          discovery, collaboration, and real-world experience.
        </p>
        <p>
          With cutting-edge facilities, a welcoming campus community, and a
          strong commitment to research and innovation, You University stands as
          a hub for ideas, growth, and opportunity. We believe in developing not
          just professionals, but thoughtful, responsible, and visionary
          leaders.
        </p>
      </div>
    </div>
  );
}
