import React from 'react';

import './ProjectItem.styles.scss';

const ProjectItem = (props: any) => {
  const { title, imageUrl, link } = props;
  
  return (
    <div>
      <p>Title: {title}</p>
      <a href={link} target='_blank'>Link: {link}</a>
      <p>imageUrl: {imageUrl}</p>
    </div>
  );
};

export default ProjectItem;