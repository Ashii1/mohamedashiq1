import React, { useState } from 'react';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';

function Project() {
  const projects = [
    {
      img: project1,
      title: "Website",
      desc: "Website Design using frontend technologies HTML , CSS , JAVASCRIPT",
      link: "https://github.com/Ashii1/web",
    },
    {
      img: project2,
      title: "Amazon Clone projects",
      desc: "Amazon Clone landing page desined using Html and css",
      link: "https://github.com/Ashii1/amzn-clone5",
    },
    {
      img: project3,
      title: "React js",
      desc: "Reactjs",
      link: "https://myweb-lac.vercel.app/",
    },
    {
      img: project4,
      title: "Progressive Web app using React",
      desc: "This project developed using React js and to get data from Api and display the day in next screen",
      link: "https://github.com/Ashii1/pwa",
    },
    
  ];

  const ProjectCo = ({ img, title, desc, link }) => {
    const [show, setShow] = useState(false);

    return (
      <a href={link}>
        <div className='project'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {show ? (
            <div className='project-content'>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ) : (
            <img src={img} alt='' />
          )}
        </div>
      </a>
    );
  };

  return (
    <div className='project-container' id='Projects'>
      <h1>MyProjects</h1>
      <h4>Check Out My projects</h4>
      <div className='project-container-projects'>
        {projects.map((project, index) => (
          <ProjectCo
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
