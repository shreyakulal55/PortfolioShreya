import React from 'react';


export default function Projects() {
  return (
    <section id="projects" className="container mt-5">
     <h2 className="section-heading">
  Projects

</h2>

      <div className="projects-wrapper">
        <div className="project-card">
          <div className="project-content">
         
        <h3>JavaScript Shopping Cart</h3>
        <p>
          A web application that allows users to add items, view summaries, and proceed to checkout.
        </p>
        <p>
          <strong>Tools & Technologies:</strong> HTML, CSS, JavaScript
        </p>
        <p>
          <strong>Features:</strong> Add items to the cart, view cart summaries, proceed to checkout.
        </p>
        <a href="https://github.com/shreyakulal55/Javascript_ShoppingCart.git" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i> View on GitHub
        </a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-content">
        <h3>Scholarship Management System</h3>
        <p>
          A web app facilitating scholarship application and management for both faculty and students.
        </p>
        <p>
          <strong>Tools & Technologies:</strong> Java, NetBeans, MySQL
        </p>
        <p>
          <strong>Features:</strong> Streamlines the scholarship application process for students and enables faculty to manage scholarship details.
        </p>
        <a href="https://github.com/shreyakulal55/Scholarship-Management-System-DBMS-Miniproject.git" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i> View on GitHub
        </a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-content">
        <h3>eCommerce Website Testing</h3>
        <p>
          Developed and executed test cases for an e-commerce website to ensure functionality of user registration, login, product search, and checkout processes.
        </p>
        <p>
          <strong>Tools & Technologies:</strong> Cypress
        </p>
        <p>
          <strong>Test Management:</strong> Test Plans, Test Cases, Test Execution, Defect Reporting
        </p>
        <a href="https://github.com/shreyakulal55/E-commerce_Website_Testing" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i> View on GitHub
        </a>
      </div>
   
  </div>
        <a href="https://github.com/shreyakulal55" target="_blank" rel="noopener noreferrer" className="explore-more-button">
    Explore More
  </a>
      </div>

      {/* Internship Section */}
      <section id="internship" className="container mt-5">
        <h2 className="section-heading">Internship Experience</h2>
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="project-content">
              <h3>Voltix Solutions</h3>
              <p><strong>Position:</strong> Software Developer</p>
              <p><strong>Duration:</strong> October 2023 - November 2023</p>
              <p>
                Developed a responsive web app using React.js and Express.js
                for Voltix Solutions. The app showcases their projects, services,
                testimonials, and social feeds.
              </p>
              <p>
                <strong>GitHub Link:</strong> <a href="https://github.com/shreyakulal55/Voltix1.git" target="_blank" rel="noopener noreferrer">Voltix1 Repository</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
