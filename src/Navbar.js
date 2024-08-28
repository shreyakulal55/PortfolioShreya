import React from "react";
import "./Navbar.css";
import profilePic from "./images/linkedinimage.jpeg";


function Navbar() {
  const navbarBrandStyle = {
    fontWeight: "bold",
    fontSize: "1.6rem",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#about" style={navbarBrandStyle}>
          SHREYA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#qualifications">
                Qualification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={profilePic} alt="Profile" className="profile-pic" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/file/d/1v8Vy_rkMr8K-XONYWRunGaWu5FyRndYt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1GI3lDRCHRzSN2GSKM_ecHZ1yJ9_oGnaM?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certifications
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
