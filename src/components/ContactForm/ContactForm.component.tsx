import React from 'react';
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

const ContactForm = () => (
  <section id='contact'>
    <div className='contact-form'>
      <h3>Contact Me</h3>
      <div className='form-content'>
      <FormControl>
        <TextField label='Your Name' required />
        <TextField label='Your Phone Number' required />
        <TextField label='Your Email' required />
        <TextField 
          multiline={true} 
          variant='outlined' 
          rows={5} 
          label='Message' 
          style={styles.additionalInfo} 
        />
        <Button variant='contained'>Send Message</Button>
      </FormControl>
      </div>
    </div>
  </section>
);

export default ContactForm;