import React from 'react';

import './ErrorMessage.styles.scss';

const ErrorMessage = (props: any) => {
  const { displayError } = props;

  return (
    <>
    {displayError === true && 
      <div className='error-message'>*Please fill in all required fields*</div>
    }
    </>
  );
}

export default ErrorMessage;