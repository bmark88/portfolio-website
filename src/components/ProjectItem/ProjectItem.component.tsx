import React from 'react';

import './ProjectItem.styles.scss';

const ProjectItem = (props: any) => {
  const { title, imageUrl, link, id, description } = props;
  
  return (
    <div className={`${id % 2 === 0 ? 'left' : 'right'} project-item`}>
      <div className='project-information-container'>
        <h3>
          <a href={link} target='_blank'>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
      <img src={imageUrl} alt='profile-picture' />
    </div>
  );
};

export default ProjectItem;