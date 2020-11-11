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
    marginTop: 20
  }
};

const ContactForm = (props: any) => (
  <div className='contact-container' >
    <h2>{props.title}</h2>
    <FormControl>
      <TextField label='Your Name' required />
      <TextField label='Your Phone Number' required />
      <TextField label='Your Email' required />
      <TextField multiline={true} variant='outlined' rows={5} label='Message' style={styles.additionalInfo} />
      <Button style={styles.formButton}>Submit Contact Information</Button>
    </FormControl>
  </div>
);

export default ContactForm;