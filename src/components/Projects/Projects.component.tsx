import React from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';

import './Projects.styles.scss';

import projectList from './projectListData';

const Projects = () => (
  <div className='project-container'>
    <h2>Projects</h2>
    {projectList.map(project => <ProjectItem key={project.id} {...project} />)}
  </div>
);

export default Projects;