import "../style/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Me</h1>
        </div>
      <div className="div1">
       <p className="about-description2">
          I am a dedicated BSc graduate with a passion for technology and
          learning. Outside of work, I enjoy playing cricket, traveling,
          watching games and movies, reading books, and listening to music.
        </p>
 
        <p  className="about-description3">
           I specialize in Full Stack Web Development, where I combine creativity with logic to build responsive, scalable, and modern applications. My technical toolkit includes HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Git/GitHub. I enjoy transforming ideas into interactive, visually appealing, and high-performance digital experiences.
        </p>
   
        <p className="about-description4">
          Beyond development, I’m enthusiastic about Cloud Computing and DevOps. I love exploring tools like AWS, Docker, Jenkins, and Kubernetes to understand automation, scalability, and CI/CD pipelines. These technologies inspire me because they make software more reliable, efficient, and easy to manage.
        </p>

         <p   className="about-description">
        In my free time, I enjoy watching movies and sports, reading books about success and personal growth, and listening to music that keeps me inspired. I’m also a huge fan of strategy and adventure games, which sharpen my decision-making and problem-solving skills.
        </p>

</div>

      <div className="about-skills-header">
        <h2>Skills</h2>
      </div>
      <ul className="about-skills-list">
        <li>Full Stack Developer</li>
        <li>Cloud Computing</li>
        <li>DevOps Developer</li>
      </ul>
    </section>
  );
};

export default About;
