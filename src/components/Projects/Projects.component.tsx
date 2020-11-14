import React, { useState } from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';
import projectList from './projectListData';

import './Projects.styles.scss';

const Projects = () => {
  const [project, setProject] = useState({
    id: 1
  });

  return (
    <section id='projects'>
      <div className='container'>
        <h2>Projects</h2>
        {projectList.map(project => {
          return (
            <>
            {
              project.id === 1 &&
              <ProjectItem key={project.id} {...project} />
            }
            </>
          )
        }
        )}
      </div>
    </section>
  );
}

export default Projects;