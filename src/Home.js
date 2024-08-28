import React from "react";
import profilePic from "./images/linkedinimage.jpeg";
import "./Home.css"; 

function Home() {
  return (
    <section id="about" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 word-slice flip-animation">Hello!</h1>{" "}
        
          <p className="lead">
            I'm Shreya, a passionate Artificial Intelligence & Data Science
            Student with a love for coding and technology.
          </p>
        
       
          <p className="lead">
            Let's explore how I can help you with your next project!
          </p>
          <a href="#contact-section" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={profilePic}
            alt="About Me"
            className="img-fluid rounded-circle shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
