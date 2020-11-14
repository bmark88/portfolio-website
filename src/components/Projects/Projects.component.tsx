import React from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';
import projectList from './projectListData';

import './Projects.styles.scss';

const Projects = () => (
  <section id='projects'>
    <div className='container'>
      <h2>Projects</h2>
      {projectList.map(project => 
        <ProjectItem key={project.id} {...project} />
      )}
    </div>
  </section>
);

export default Projects;