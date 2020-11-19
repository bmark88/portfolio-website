import React, { useState } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';
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
    message: ''
  });

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
      message: ''
    });
  };
  
  const handleChange = (e: any) => {
    if (e.target.id) {
      setFormInfo({...formInfo, [e.target.id]: e.target.value})
    }
  };  

  return (
    <section id='contact'>
      <div className='contact-form'>
        <h3>Contact Me</h3>
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
            variant='outlined' 
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
          >
            Send Message
          </Button>
        </FormControl>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;