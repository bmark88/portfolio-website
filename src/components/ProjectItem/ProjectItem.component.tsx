import React from 'react';

import './ProjectItem.styles.scss';

const ProjectItem = (props: any) => {
  const { title, imageUrl, link, description, viewType } = props;
  
  return (
    <>
      {
        viewType === 'carousel' ? 
        <>
          <h3>
          <a href={link} target='_blank'>{title}</a>
          </h3>
          <div className='project-item'>
            <div className='project-information-container'>
              <p>{description}</p>
            </div>
            <img src={imageUrl} alt='project-preview' />
          </div>
        </>
        :
        <div>
          <a href={link} target='_blank'>
            <div className='overlay'>
              <span>{title}</span>
            </div>
            <img src={imageUrl} alt='project-preview' />
          </a>
        </div>
      }
    </>
  );
};

export default ProjectItem;