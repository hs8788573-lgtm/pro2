import "../style/Detials.css";

const Details = () => {
  return (
    <section className="details-section">
      {/* ----- Title Section ----- */}
      <div className="details-header">
        <h2 className="details-title">DETAILS</h2>
      </div>

      {/* ----- Description Section ----- */}
      <div className="details-content">
        <p>
          I believe that success is built through consistency and discipline. Every day, I try to improve myself — whether it’s learning new code, exploring new tools, or understanding how technologies connect to build something powerful.
        </p>
        <p>
          I have a habit of setting clear daily goals and finishing what I start. I enjoy working on real projects that challenge my creativity and problem-solving skills. Learning is part of my lifestyle — I study new frameworks, watch tech tutorials, and experiment with new ideas whenever possible.
        </p>
        <p>
          Outside of coding, I keep my mind fresh by <strong>playing cricket</strong>, <strong>traveling</strong>, <strong>watching movies</strong>, and <strong>listening to music</strong>. These habits help me stay balanced, positive, and creative in both work and life.
        </p>
        <p>
          My future goal is to become a professional <strong>Software Engineer</strong> and work at top global companies like <strong>Google</strong> or <strong>Microsoft</strong>. I dream of traveling to <strong>Germany</strong> and living there while building an impactful career in the software industry.
        </p>
        <p>
          I want to learn deeply — not just about programming languages, but about how technology shapes the future. My vision is to keep improving my technical and personal skills, contribute to meaningful projects, and build a life full of growth, innovation, and inspiration.
        </p>
      </div>

      {/* ----- Button Section ----- */}
      <div className="details-buttons">
     <a href="./intoduction.docx" download="">   <button className="btn-intro">INTRODUCTION</button> </a>
       <a href="./resume.docx" download="">  <button className="btn-resume">RESUME</button> </a>
      </div>

      {/* ----- Social Links Section ----- */}
      <div className="details-socials">
        <a href="https://wa.me/9174044825564?text=Hii%2C%20I%20am%20interested%20in%20you.%20Are%20you%20interested%20in%20my%20company%3F" className="social-link">WHATSAPP</a>
        <a href="https://instagram.com/himanshu_soni2006" className="social-link">INSTAGRAM</a>
        <a href="#" className="social-link">FACEBOOK</a>
        <a href="https://www.linkedin.com/in/himanshu-soni/" className="social-link">LINKEDIN</a>
      </div>
    </section>
  );
};

export default Details;
