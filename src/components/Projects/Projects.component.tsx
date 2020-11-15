import React, { useState } from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';
import projectList from './projectListData';

import './Projects.styles.scss';

const Projects = () => {
  const [projects, setProjects] = useState({
    id: 0,
    projectView: 'carousel'
  });

  return (
    <section id='projects'>
      <div className='container'>
        <h2>Projects</h2>
          <ul className='projects'>
            <li onClick={() => setProjects({...projects, projectView: 'carousel'})}>
              Individual
            </li>
            <li onClick={() => setProjects({...projects, projectView: 'grid'})}>
              Grid
            </li>
          </ul>
          <button onClick={() => {
            // Reset carousel to first item in projectList array
            if (projects.id >= projectList.length - 1) {
              setProjects({...projects, id: 0})
            } else {
              setProjects({...projects, id: projects.id + 1})
            }
          }}>Next</button>
        {
          projects.projectView === 'carousel' &&
          <div className='project-carousel'>
            {projectList.map(project => 
              project.id === projects.id &&
              <ProjectItem 
                key={project.id} 
                viewType={projects.projectView} 
                {...project} 
              />
            )}
          </div>
        }
        {
          projects.projectView === 'grid' &&
          <div className='project-grid'>
            {projectList.map(project => 
              <ProjectItem 
                key={project.id} 
                viewType={projects.projectView} 
                {...project} 
              />
            )}
          </div>
        }
      </div>
    </section>
  );
}

export default Projects;