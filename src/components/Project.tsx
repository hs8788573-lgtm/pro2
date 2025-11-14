import "../style/Project.css";

const Project = () => {
  return (
    <section className="project-section">

      <div className="section-title">
        <h2>Projects</h2>
      </div>

      {/* Chat App Project */}
      <div className="project-card">
        <h2>💬 Chat Application</h2>

        <p>
          I built a real-time chat application designed for fast, secure, and smooth
          communication. The app supports instant messaging, group chats, and a clean UI.
        </p>

        <h3>✨ Key Features</h3>
        <ul className="no-dots">
          <li>⚡ Real-time messaging using Socket.io</li>
          <li>👥 One-to-one & group chat support</li>
          <li>📤 Send text, images, and links</li>
          <li>📱 Responsive UI</li>
          <li>🔒 JWT / Firebase Authentication</li>
        </ul>

        <h3>🛠️ Technologies Used</h3>
        <ul className="no-dots">
          <li>React.js / Next.js</li>
          <li>Node.js + Express</li>
          <li>Socket.io</li>
          <li>MongoDB / Firebase</li>
          <li>Tailwind CSS</li>
        </ul>

        <h3>🎯 What I Learned</h3>
        <p>
          Managing real-time data flow, socket connections, UI optimization, and scalable chat architecture.
        </p>
      </div>

      {/* E-Commerce Project */}
      <div className="project-card">
        <h2>🛒 E-Commerce Website</h2>

        <p>
          A modern e-commerce platform with product listing, secure checkout, and a complete admin dashboard.
        </p>

        <h3>✨ Key Features</h3>
        <ul className="no-dots">
          <li>🛍️ Advanced product filtering</li>
          <li>🧺 Cart & Wishlist system</li>
          <li>🔐 JWT/Firebase Authentication</li>
          <li>💳 Online payments (Stripe/Razorpay)</li>
          <li>📱 Fully responsive UI</li>
          <li>🛠️ Admin panel for product/order management</li>
        </ul>

        <h3>🛠️ Technologies Used</h3>
        <ul className="no-dots">
          <li>React.js / Next.js</li>
          <li>Node.js + Express.js</li>
          <li>MongoDB / Firebase</li>
          <li>Stripe / Razorpay</li>
          <li>Tailwind CSS / Material UI</li>
        </ul>

        <h3>🎯 What I Learned</h3>
        <p>
          Full-stack development, UI/UX improvement, payment integration, and scalable backend architecture.
        </p>
      </div>

    </section>
  );
};

export default Project;
