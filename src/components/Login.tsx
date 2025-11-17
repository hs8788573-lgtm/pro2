import { useState } from "react";
import "../style/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.contact ||
      !formData.email ||
      !formData.message
    ) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    alert("✅ Form submitted successfully!");
    console.log("Sending to backend:", formData);
  };

  return (
    <div className="contact-container">
      <form className="form-data" onSubmit={handleSubmit}>
        <div className="title-box">
          <h2>CONTACT ME</h2>
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="FIRST NAME"
            name="firstName"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="LAST NAME"
            name="lastName"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="CONTACT NUMBER"
            name="contact"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="YOUR EMAIL"
            name="email"
            onChange={handleChange}
          />

          <textarea
            placeholder="Write your message..."
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="btn-box">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
