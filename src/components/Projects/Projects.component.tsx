import React from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';
import projectList from './projectListData';

import './Projects.styles.scss';

const Projects = () => (
  <div className='project-container'>
    <h2 id='projects'>Projects</h2>
    {projectList.map(project => 
      <ProjectItem key={project.id} {...project} />
    )}
  </div>
);

export default Projects;