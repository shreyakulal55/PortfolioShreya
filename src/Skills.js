import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

function Skills() {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      details: 'Java, Python, JavaScript, SQL, HTML, CSS',
    },
    {
      icon: <FaTools />,
      title: 'Frameworks & Tools',
      details: 'React.js, Express.js, Node.js, Cypress',
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      details: 'Oracle, MySQL, MongoDB',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Platforms',
      details: 'AWS, Microsoft Azure',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className='SKILLHEAD'>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-details">{skill.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
