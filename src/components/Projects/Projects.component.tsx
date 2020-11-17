/****************
*****************

DO NOT REMOVE COMMENTED OUT CODE FROM THIS FILE.
ALL COMMENTED OUT CODE IN THIS FILE WILL BE USED TO
TOGGLE THE PROJECT LAYOUT/VIEW

****************
****************/
import React, { useState } from 'react';

import ProjectItem from '../ProjectItem/ProjectItem.component';
// import ToggleItem from '../ToggleItem/ToggleItem.component';
import projectList from './projectListData';

import './Projects.styles.scss';

// const updateCarouselProject = (state: any, setState: any) => {
//   // Reset carousel to first item in projectList array
//   if (state.id >= projectList.length - 1) {
//     setState({...state, id: 0})
//   } else {
//     setState({...state, id: state.id + 1})
//   }
// };

const Projects = () => {
  // const [projects, setProjects] = useState({
  //   id: 0, // used for carousel to display a particular project
  //   projectView: 'grid' // used to toggle views between grid and carousel
  // });

  // const { projectView, id } = projects;

  return (
    <section id='projects'>
      <h2>Projects</h2>
      {/* <ul className='projects-items hover-underline'>
        <ToggleItem 
          items={['grid', 'carousel']} 
          setProjects={setProjects} 
          type='projects' 
        />
      </ul>
      {
        projectView === 'carousel' &&
        <>
          <button onClick={() => 
            updateCarouselProject(projects, setProjects)}
          >
            Next
          </button>
          <div className='project-carousel'>
            {projectList.map(project => 
              project.id === id &&
              <ProjectItem 
                key={project.id} 
                viewType={projectView} 
                {...project} 
              />
            )}
          </div>
        </>
      } */}
      {
        // projectView === 'grid' &&
        <div className='project-grid'>
          {projectList.map(project => 
            <ProjectItem 
              key={project.id} 
              // viewType={projectView} 
              {...project} 
            />
          )}
        </div>
      }
    </section>
  );
};

export default Projects;