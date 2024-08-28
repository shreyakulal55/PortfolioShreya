import React from "react";
import "./MoreAboutMe.css";

import aboutMe from "./images/aboutME.jpg";

function MoreAboutMe() {
  return (
    <section id="more-about-me" className="container mt-5">
      <h2 className="section-heading">About Me</h2>
      <div className="content">
        <p className="intro">
          <p className="interests">
            I'm Shreya, a Computer Science student specializing in Artificial
            Intelligence and Data Science. I
            enjoy playing chess, cricket, volleyball, and badminton, and I love
            exploring new things and reading books. Just as I carefully save up
            to buy a book, read it from cover to cover, and complete it, I
            approach my projects with the same dedication. From starting with
            ideas to completing the final implementation, I apply my time
            management skills to both, requiring careful planning and
            persistence. I have strong team management skills and experience as
            a full-stack developer. I like to stay innovative and am committed
            to creating fluent user experiences while staying fashionable. I
            effectively lead projects and build both the frontend and backend of
            web applications, ensuring they work seamlessly. My technical skills
            include proficiency in programming languages such as Java, Python,
            JavaScript, SQL, HTML, and CSS, as well as frameworks like React.js,
            Express.js, and Node.js. I am also experienced in testing tools like
            Cypress and skilled in database management with Oracle, MySQL, and
            MongoDB. Always ready to explore new things and collaborate, I
            exel in dynamic environments where continuous learning is a key.
          </p>
        </p>

        <img src={aboutMe} alt="About Me" className="about-me-image" />
      </div>
    </section>
  );
}

export default MoreAboutMe;
