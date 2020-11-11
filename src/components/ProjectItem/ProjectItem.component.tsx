import React from 'react';

import './ProjectItem.styles.scss';

const ProjectItem = (props: any) => {
  const { title, imageUrl, link, id } = props;
  
  return (
    <div className={id % 2 === 0 ? 'left' : 'right'}>
      <h3>
        <a href={link} target='_blank'>{title}</a>
      </h3>
      <img src={imageUrl} alt='profile-picture' />
    </div>
  );
};

export default ProjectItem;