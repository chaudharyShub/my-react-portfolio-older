import './Project.css';
import ProjectItem from './ProjectItem';
import { projectsArray } from '../Details.js';
import React, { useEffect, useState } from 'react';

function Project({ setProgress, category }) {

  const [project, setProject] = useState([]);

  useEffect(() => {
    setProgress(0);
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 700);
    setProject(projectsArray);
    window.scrollTo(0, 0);
    document.title = `My Portfolio - ${category}`;
  }, []);

  return (
    <div className='project_main'>
      <h2 className="header" data-aos="zoom-in">Recent Projects</h2>
      <div className="projects">
        {
          projectsArray.map(element => {
            return <ProjectItem
              key={element.id}
              title={element.title}
              img={element.img}
              desc={element.description}
              tech_stack={element.tech_stack}
              href={element.href}
            />
          })
        }
      </div>
    </div>
  );
};

export default Project;
