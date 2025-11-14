import React from 'react';
import "../style/Header.css";
const Header: React.FC = () => {
  return <header>

<section className="intro">
      <div className="intro-content">
        <h2 className="hello">Hello, I'm <br></br><span className="name">Himanshu Soni</span> 👋</h2>
        <p className="par">
          I’m a passionate <span className="role">Full-Stack Developer</span> who loves
          building beautiful, fast, and user-friendly web applications.
        </p>
        <p className="par">
          My journey into software development began with curiosity about how the web works — and that curiosity quickly turned into a deep interest in coding, design, and logic. Over time, I’ve developed skills in React, JavaScript, TypeScript, Node.js, HTML, CSS, and Tailwind CSS, and I’m constantly exploring new technologies to stay updated with modern trends.

I love building projects that challenge me to think differently, whether it’s a responsive portfolio website, a full-stack web app, or an interactive animation interface. My goal is to write clean, efficient code and create seamless digital experiences that bring ideas to life.

Beyond coding, I’m driven by continuous learning, collaboration, and creativity. I believe every project is a chance to grow, experiment, and make a positive impact. I’m currently looking for opportunities to contribute my skills in a professional environment and help build something truly meaningful.
        </p>
        <button className="hire-btn">Hire Me</button>
      </div>
    </section>


  </header>;
};

export default Header;
