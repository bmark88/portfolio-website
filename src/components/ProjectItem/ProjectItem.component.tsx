import React from 'react';

import './ProjectItem.styles.scss';

const ProjectItem = (props: any) => {
  const { title, imageUrl, link, id, description, viewType } = props;
  
  return (
    <>
      {
        viewType === 'carousel' ? 
        <div className={`display-${id % 2 === 0 ? 'left' : 'right'} project-item`}>
          <div className='project-information-container'>
            <h3>
              <a href={link} target='_blank'>{title}</a>
            </h3>
            <p>{description}</p>
          </div>
          <img src={imageUrl} alt='project-preview' />
        </div>
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