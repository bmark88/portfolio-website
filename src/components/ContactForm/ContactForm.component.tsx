import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';

import ErrorMessage from '../ErrorMessage/ErrorMessage.component';

import './ContactForm.styles.scss';

// Styles for material ui components only
const styles = {
  formButton: {
    border: 'solid 1px',
    marginTop: 10
  },
  additionalInfo: {
    marginTop: 20,
    marginBottom: 20
  }
};

const ContactForm = () => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    errorMessage: ''
  });
  const [displayError, setDisplayError] = useState(false);

  const { name, phoneNumber, email, message } = formInfo;

  const handleClick = (e: any) => {
    e.preventDefault();

    const messageContent = `Hi Bradley, %0d%0a 
    %0d%0a ${message} %0d%0a %0d%0a 
Please contact me at: %0d%0a %0d%0a 
Email: ${email}
%0d%0a or %0d%0a 
Phone: ${phoneNumber}
`;

    const subjectContent = `
      ${name} | Requesting More Information
    `;

    window.open(`mailto:bradley.mark@hotmail.com?subject=${subjectContent}&body=${messageContent}`);
    
    setFormInfo({
      ...formInfo, 
      name: '', 
      phoneNumber: '', 
      email: '', 
      message: '',
    });

    setDisplayError(true);
  };
  
  const handleChange = (e: any) => {
    setFormInfo({...formInfo, [e.target.id]: e.target.value})
  };  

  useEffect(() => {
    (!(name && phoneNumber && email)) ? 
    setDisplayError(true) : setDisplayError(false)
  }, [formInfo])

  return (
    <section id='contact'>
      <div className='contact-form'>
        <h3>Hire Me</h3>
        <p>Fill in the form below</p>
        <div className='form-content'>
        <FormControl>
          <TextField 
            label='Your Name'
            required 
            onChange={handleChange}
            value={name}
            id='name'
          />
          <TextField 
            label='Your Phone Number' 
            required 
            onChange={handleChange}
            value={phoneNumber}
            id='phoneNumber'
          />
          <TextField 
            label='Your Email' 
            required
            onChange={handleChange}
            value={email}
            id='email'
          />
          <TextField 
            multiline={true} 
            variant='filled' 
            rows={5} 
            label='Message'
            style={styles.additionalInfo} 
            onChange={handleChange}
            value={message}
            id='message'
          />
          <Button 
            variant='contained' 
            onClick={handleClick}
            disabled={displayError}
          >
            Send Message
          </Button>
        </FormControl>
        <ErrorMessage displayError={displayError} />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;