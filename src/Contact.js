import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact-section" className="contact-section-wrapper">
     
      <div className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
        <p className="contact-details">
          I’m always open to discussing your project or chatting about
          opportunities.
        </p>
        <div className="contact-links">
          <a href="mailto:shreyakulal55@gmail.com" className="contact-link">
            <i className="fas fa-envelope"></i> shreyakulal55@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-6b4a03228/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-linkedin"></i> LinkedIn Profile
          </a>
          <a
            href="https://github.com/shreyakulal55"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-github"></i> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
